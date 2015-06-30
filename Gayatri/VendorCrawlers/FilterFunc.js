/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/*global console, setTimeout, Category, getListOptions, getOptionsProductStage, removeCommonWords*/
/*jshint latedef: nofunc */
/*jshint onevar: true */

var request = require("request");
var _ = require('lodash-node');
var fs = require('fs');
var storage = require('azure-storage');
var directoryName = 'Images/';
var Q = require('q');

var resultArrayToPost = [];

function generateUUID() {
    var d = new Date().getTime(),
        r,
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
                .replace(/[xy]/g, function (c) {
                    r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
    return uuid;
}



var resultArray = [], discardedArray = [], resultArrayToPost = [], topArrayToPost = [];


function Category(id) {
    var that = this,
        d = new Date(),
        formattedDate = [(d.getMonth() + 1),
                   d.getDate(),
                   d.getFullYear()].join('/');
    this.id = id;
    //Filtered products.
    this.products = [];
    //Filled by sort and pick top 20
    this.processedProducts = [];
    //downloaded and created new objects
    this._rawProducts = [];

    //removal of common words
    function removeCommonWords(productsArray) {
        var commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-", "&", "buy"];
        _.forEach(productsArray, function (item) {
            _.forEach(commonWords, function (word) {
                item.description = item.description.replace(word, "");
            });
        });
    }


    //filtering of products
    function filterProductsByDiscount(processArray) {
        var filterArray = [], resultArray = [], i, j, a, b, c, maxn, percent, maxDiscount, arrayIndex;
        // finding product length, and calculating xn.
        for (i = 0; i < processArray.length; i = i + 1) {
            if (processArray[i].status === true) {
                a = processArray[i].description.split(" ");
                for (j = i + 1; j < processArray.length ; j = j + 1) {
                    b = processArray[j].description.split(" ");
                    c = _.intersection(a, b);
                    maxn = Math.max(a.length, b.length);
                    percent = Math.floor(c.length / maxn * 100);
                    if (percent >= 65 && processArray[i].actualPrice === processArray[j].actualPrice) {
                        filterArray.push(processArray[j]);
                        discardedArray.push(processArray[j]);
                        processArray[j].status = false;
                    }
                }
                if (filterArray.length > 0) {
                    maxDiscount = 0;
                    arrayIndex = 0;
                    filterArray.push(processArray[i]);
                    _.forEach(filterArray, function (s) {
                        if (this.discountPercentage >= maxDiscount) {
                            maxDiscount = this.discountPercentage;
                            arrayIndex = s;
                        }
                    });
                    resultArray.push(filterArray[arrayIndex]);
                    filterArray = [];
                }
                else {
                    resultArray.push(processArray[i]);
                }
            }
        }
        return resultArray;
    }

    // Top 20 products pick
    function pickTopProducts(filteredArray, n) {
        var topProducts = _.chain(filteredArray)
                        .sortBy('discountPercentage')
                        .reverse()
                        .take(n || 20)
                        .value();
        return topProducts;
    }


    function getOptionsProductStage(url, id, formattedDate) {
        return {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            json: {
                "pageNumber": 0,
                "pageSize": 0,
                "filters": [
                  {
                      "modelFieldName": "categoryId",
                      "fieldValue": id,
                      "operation": 5,
                      "logicalOperator": 0,
                      "sortBy": 0
                  },
                  {
                      "modelFieldName": "createdDate",
                      "fieldValue": formattedDate,
                      "operation": 15,
                      "logicalOperator": 1,
                      "sortBy": 0
                  }
                ]
            }
        };
    }

    function downloadImage(product) {
        var deferred = Q.defer();
        var uri = product.imageUrl;
        var downloadedFileName = generateUUID() + '.jpeg',
                    destinationFile = directoryName + downloadedFileName;
        request.head(uri, function (err, res, body) {
            if (res && res.headers && res.headers['content-type'].indexOf('image') > -1) {
                //console.log(res);
                //console.log('content-type:' + res.headers['content-type']);
                request(uri).pipe(fs.createWriteStream(destinationFile))
                            .on('close', function () {
                                product.imageFileName = downloadedFileName;
                                deferred.resolve(true);
                            });
            }
        });
        return deferred.promise;
    }

    function uploadImage(product) {
        var deferred = Q.defer();
        var sourceFileName = directoryName + product.imageFileName
        var destinationFileName = product.imageFileName
        var blobService = storage.createBlobService();
        var containerName = 'images';
        if (destinationFileName) {
            blobService.createBlockBlobFromLocalFile(
                        containerName,
                        destinationFileName,
                        sourceFileName,
                        function (error, result, response) {
                            if (error) {
                                console.log("Couldn't upload file %s", destinationFileName);
                                console.error(error);
                                deferred.reject(false, 'not good');

                            } else {
                                var resultImageUrl = "https://smamidi.blob.core.windows.net/images/" + destinationFileName;
                                product.imageUrl = resultImageUrl;
                                deferred.resolve(true, destinationFileName);
                            }
                        });
        }

        return deferred.promise;
    }

    this.getProducts = function () {
        var deferred = Q.defer(),
            url = "http://web.xavica.local/tdweb/api/productstage/getlist",
            options = getOptionsProductStage(url, this.id, formattedDate);
        request(options, function (error, response, body) {

            var tempProducts = JSON.parse(JSON.stringify(body));
            that._rawProducts = _.map(tempProducts, function (item) {
                return {
                    "id": item.id,
                    "categoryId": item.categoryId,
                    "shortDescription": item.shortDescription,
                    "description": (item.shortDescription && item.shortDescription.toLowerCase()) || '',
                    "redirectUrl": item.redirectUrl,
                    "imageUrl": item.imageUrl,
                    "imageFileName": '',
                    "storeName": item.storeName,
                    "actualPrice": item.actualPrice,
                    "currentPrice": item.currentPrice,
                    "discountPercentage": item.discountPercentage,
                    "isShippingFree": item.isShippingFree,
                    "star": item.star,
                    "isPublished": item.isPublished,
                    "showDate": item.showDate,
                    "source": item.source,
                    "status": true
                };
            });
            console.log('Category Id::' + that.id + ":: Recieved Products From Product Stage ::"  + that._rawProducts.length);
            deferred.resolve(that._rawProducts);
        });
        return deferred.promise;
    };

    this.processProducts = function () {

        if (that._rawProducts && that._rawProducts.length) {
            console.log('Started Processing of Category Id: ' + that.id );
            removeCommonWords(that._rawProducts);
            that.products = filterProductsByDiscount(that._rawProducts);
            console.log('Finished Filtering Products of Category Id: ' + that.id);
            console.log('Filtered Products Count ::' + that.products.length);
        }

    };

    this.sortAndPickProducts = function (n) {
        that.processedProducts = pickTopProducts(that.products, n);
    };

    this.downloadImages = function () {
        var lastPromise = that.processedProducts.reduce(function (promise, product) {
            return promise.then(function (result) {
                if (result) {
                   //Console.log (previous file downloaded);
                }
                return downloadImage(product);
            });
        }, Q.resolve());
        lastPromise.then(function () {
            console.log('Finished Downloaded of Product Images of Category ::' + that.id );
        });
        return lastPromise;
    };

    this.uploadImages = function () {
        var lastPromise = that.processedProducts.reduce(function (promise, product) {
            return promise.then(function (result) {
                if (result) {
                    //successs of previous record
                    //This is not great code but we have to live with this.
                }
                return uploadImage(product);
            });
        }, Q.resolve());
        lastPromise.then(function () {
            console.log('Finished Uploaded Images of Category::' + that.id);
        });
        return lastPromise;
    };

    this.uploadProducts = function () {
        var deferred = Q.defer();
        var options = {
            method: 'POST',
            url: "http://web.xavica.local/tdweb/api/productbulk",
            headers: {
                'Content-Type': 'application/json',
            },
            json: that.processedProducts
        };
        if (that.processedProducts && that.processedProducts.length) {
            function callback(error, response, body) {
                if (!error) {
                    console.log('Finsihed Pushed into Products table for Category id: ' + that.id + ", Products Count::" + that.processedProducts.length);
                    deferred.resolve(true);
                }
                else {
                    console.log('Error happened: ' + error);
                    deferred.reject('error occured');
                }
            }
            request(options, callback);
        }
       
        return deferred.promise;
    };

}

var categoryIds = [1, 2];//, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var categories = categoryIds.map(function (categoryId) {
    return new Category(categoryId);
});

console.log("**********************************************************************");
var lastPromise = categories.reduce(function (promise, category) {
    return promise.then(function () {
        return category.getProducts()
               .then(category.processProducts)
               .then(category.sortAndPickProducts)
               .then(category.downloadImages)
               .then(category.uploadImages)
               .then(category.uploadProducts)
               .then(function () {
                   console.log("Category Id: " + category.id + ":: Finished Processing");
                   console.log("**********************************************************************");

               });

    });
}, Q.resolve());

lastPromise.then(function () {
    console.log('Finished All Categories Processing');
});

