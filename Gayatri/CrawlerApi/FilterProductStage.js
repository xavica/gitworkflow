var request = require("request");
var _ = require('lodash-node');
var fs = require('fs');
var storage = require('azure-storage');
var directoryName = 'Images/';

// Reteving the productstage table data.
var processArray = [], resultArray = [], discardedArray = [], resultArrayToPost = [], topArrayToPost = [];
var getOptions = {
    method: 'GET',
    url: "http://localhost:16193/api/productstage/getall",
    headers: {
        'Content-Type': 'application/json'
    },
};
var rawProducts = [];
request(getOptions, function (error, response, body) {
    rawProducts = JSON.parse(body);
    console.log(rawProducts.length);
    // console.log(rawProducts);
    // console.log(rawProducts.length);

    // Adding status field.
    rawProducts.forEach(function (item) {
        processArray.push({
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
        });
        // console.log(processArray);
        // console.log("Process Array:  " + processArray.length);
    });
    // converting into lower case
    _.forEach(processArray, function (item) {
        item.description = item.description.toLowerCase();
    });

    //removal of common words
    var commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-", "&"];
    _.forEach(processArray, function (item) {
        _.forEach(commonWords, function (word) {
            item.description = item.description.replace(word, "");
        });
    });
    // console.log(processArray);
    console.log("Process Array:  " + processArray.length);

    //calling filter function

    //Filter products on each category id wise
    _.times(14, function (id) {
        var arrayToFilter = [];
        _.forEach(processArray, function (product) {
            if (+product.categoryId === +id)
                arrayToFilter.push(product);
        });
        productFilter(arrayToFilter);  // the function will push the filtered products to resultArray for each category it called
    });

    //Top 10 products pick.
    _.times(14, function (id) {
        sortArray = [];
        _.forEach(resultArray, function (item) {
            if (+item.categoryId === +id)
                sortArray.push(item);
        });
        sortArray = _.sortBy(sortArray, 'discountPercentage');
        sortArray = _.take(sortArray.reverse(), 60);
        sortArray.forEach(function (topSortedItem) {
            topArrayToPost.push(topSortedItem);

            console.log("product: " + id + " " + topArrayToPost.length);
        });
    });

    //removing status element
    topArrayToPost.forEach(function (item) {
        resultArrayToPost.push({
            "id": item.id,
            "categoryId": item.categoryId,
            "shortDescription": item.shortDescription,
            "description": item.description,
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
        });
    });
    // console.log(resultArrayToPost);
    console.log("resultArrayToPost:  " + resultArrayToPost.length);

    downloadUploadImages(resultArrayToPost);
    pushToProductTable(resultArrayToPost);

}); // request close

//ProductFilter function where Filtered as per categoryid will come here for process.
function productFilter(processArray) {
    var filterArray = [];

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
}

// azure image url update

//Downloading Image 
var downloadImage = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

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

//pushing to product table
function pushToProductTable(products) {
    var options = {
        method: 'POST',
        url: "http://localhost:16193/api/productbulk",
        headers: {
            'Content-Type': 'application/json',
        },
        json: products
    };
    console.log("products inserted test");
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


