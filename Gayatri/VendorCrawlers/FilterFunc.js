var request = require("request");
var _ = require('lodash-node');
var fs = require('fs');
var storage = require('azure-storage');
var directoryName = 'Images/';

var resultArrayToPost = [];
for (id = 1; id <= 1; id++) {
    filterProcess(id);
};
var processArray = [], resultArray = [], discardedArray = [], resultArrayToPost = [], topArrayToPost = [];
var d = new Date(),
       formattedDate = [(d.getMonth() + 1),
               d.getDate(),
               d.getFullYear()].join('/');
//retreival of products by category, and complete filter process.
function filterProcess(id) {
    var getlistOptions = {
        method: 'POST',
        url: "http://web.xavica.local/tdweb/api/productstage/getlist",
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
    }
    request(getlistOptions, function (error, response, body) {
        var products = [];
        rawProducts = JSON.parse(JSON.stringify(body));
        rawProducts = addStatus(rawProducts);
        convertLower(rawProducts);
        removeCommonWords(rawProducts);
        console.log("received products:  " + rawProducts.length);
        var filteredArray = productFilter(rawProducts);
        var topProductArray = pickTopProducts(filteredArray);
        //var azureUrlArray = downloadUploadImages(topProductArray);
        var finalArray = transformProducts(topProductArray);
        pushToProductTable(finalArray);
        //console.log("category: " + id + "  completed");

    });
}

// Adding status field.
function addStatus(rawProducts) {
    var processArray = _.map(rawProducts, function (item) {
        return {
            "id": item.id,
            "categoryId": item.categoryId,
            "shortDescription": item.shortDescription,
            "description": item.shortDescription,
            "redirectUrl": item.redirectUrl,
            "imageUrl": item.imageUrl,
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
    return processArray;
}

// converting into lower case
function convertLower(productsArray) {
    _.forEach(productsArray, function (item) {
        item.description = (item.description && item.description.toLowerCase()) || '';
    });
}

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
function productFilter(processArray) {
    var filterArray = [], resultArray = [];
    // finding product length, and calculating xn.
    for (var i = 0; i < processArray.length; i++) {
        if (processArray[i].status === true) {
            var a = processArray[i].description.split(" ");
            for (j = i + 1; j < processArray.length ; j++) {
                var b = processArray[j].description.split(" ");
                var c = _.intersection(a, b);
                var maxn = Math.max(a.length, b.length);
                var percent = Math.floor(c.length / maxn * 100);
                if (percent >= 65 && processArray[i].actualPrice === processArray[j].actualPrice) {
                    filterArray.push(processArray[j]);
                    discardedArray.push(processArray[j]);
                    processArray[j].status = false;
                }
            }
            if (filterArray.length > 0) {
                var maxDiscount = 0;
                var arrayIndex = 0;
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

// azure image url update

//Downloading Image 
var downloadImage = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        if (res && res.headers && res.headers['content-type'].indexOf('image') > -1) {
            //console.log(res);
            //console.log('content-type:' + res.headers['content-type']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

        }
    });
}

//genarating uid for Downloaded Image 
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

//uploading  Image 
function uploadImage(sourceFileName, destinationFileName) {
    var blobService = storage.createBlobService();
    var containerName = 'images';
    blobService.createBlockBlobFromLocalFile(
    containerName,
    destinationFileName,
    sourceFileName,
    function (error, result, response) {
        //console.log(sourceFileName);
        //console.log(destinationFileName);
        if (error) {
            console.log("Couldn't upload file %s", destinationFileName);
            console.error(error);
        } else {
            console.log('File %s uploaded successfully', destinationFileName);
        }
    });
}

//download upload images
function downloadUploadImages(products) {
    products.forEach(function (item) {
        var downloadedFileName = generateUUID() + '.jpeg';
        downloadImage(item.imageUrl, directoryName + downloadedFileName, function () {
            console.log('download done');
            uploadImage(directoryName + downloadedFileName, downloadedFileName);
        });
        var resultImageUrl = "https://smamidi.blob.core.windows.net/images/" + downloadedFileName;
        item.imageUrl = resultImageUrl;
        console.log(resultImageUrl);
    });
}

//prepare data for push
function transformProducts(productsList) {
    var d = new Date(),
        formattedDate = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('/'),
    resultArrayToPost = productsList.map(function (item) {
        return {
            CategoryId: item.categoryId,
            ShortDescription: item.shortDescription,
            Description: item.shortDescription,
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: item.storeName,
            ActualPrice: item.actualPrice,
            CurrentPrice: item.currentPrice,
            DiscountPercentage: item.discountPercentage,
            IsShippingFree: 1,
            Star: 4,
            IsPublished: 0,
            ShowDate: formattedDate,
            Source: "Crawler",
            CreatedDate: formattedDate,
            LastUpdateDate: formattedDate
        };
    });
    return resultArrayToPost;
}

//pushing to product table
function pushToProductTable(products) {
    var options = {
        method: 'POST',
        url: "http://web.xavica.local/tdweb/api/productbulk",
        headers: {
            'Content-Type': 'application/json',
        },
        json: products
    };
    function callback(error, response, body) {
        if (!error) {
            console.log(response.statusCode);
            console.log(body);
        }
        else {
            console.log('Error happened: ' + error);
        }
    }
    request(options, callback);
}



