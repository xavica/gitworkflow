var request = require("request");
var _ = require('lodash-node');
var querystring = require('querystring');

// Reteving the productstage table data.
var processArray = [], resultArray = [], discardedArray = [],resultArrayToPost = [];
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
        // console.log(processArray);
        // console.log("Process Array:  " + processArray.length);
    });
    // converting into lower case
    _.forEach(processArray, function (item) {
        item.shortDescription = item.shortDescription.toLowerCase();
    });

    //removal of common words
    var commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-", "&"];
    _.forEach(processArray, function (item) {
        _.forEach(commonWords, function (word) {
            item.shortDescription = item.shortDescription.replace(word, "");
        });
    });
    // console.log(processArray);
    console.log("Process Array:  " + processArray.length);

    //actual filter

    //Filter products on each category id wise
    _.times(14, function (id) {
        var arrayToFilter = [];
        _.forEach(processArray, function (product) {
            if (+product.categoryId === +id)
                arrayToFilter.push(product);
        });
        productFilter(arrayToFilter);
    });

    //removing status element
    resultArray.forEach(function (item) {
        resultArrayToPost.push({
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
            "createdData": "1/1/2015",
            "lastUpdateData": "1/1/2015"
        });
    });
    // console.log(resultArrayToPost);
    console.log("resultArrayToPost:  " + resultArrayToPost.length);

}); // request close

 //ProductFilter function where Filtered as per categoryid will come here for process.
function productFilter(processArray)    {
    var filterArray = [];

    // finding product length, and calculating xn.
    for(var i=0; i<processArray.length;i++){
        if (processArray[i].status === true) {
            var a = processArray[i].shortDescription.split(" ");
            for (j = i + 1; j < processArray.length ; j++) {
                var b = processArray[j].shortDescription.split(" ");
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
var postArray = querystring.stringify(resultArrayToPost);
var options = {
    method: 'POST',
    url: "http://localhost:16193/api/productbulk",
    json: true,
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postArray.length
    },
    json: postArray
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


