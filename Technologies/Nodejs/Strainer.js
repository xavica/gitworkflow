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
    var parsed = JSON.parse(body);
    console.log(parsed.length);
    // Converting JSON data into our array objects.
    parsed.forEach(function (item) {
        rawProducts.push({
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
            "source": item.source
        });
    });
    console.log(rawProducts);
    console.log(rawProducts.length);
});