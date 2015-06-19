var request = require("request");
var _ = require('lodash-node');
var querystring = require('querystring');
var http = require("http");

// Reteving the productstage table data.
var getOptions = {
    method: 'GET',
    url: "http://localhost:16193/api/productstage/getall",
    headers: {
        'Content-Type': 'application/json'
    },
};
var parsed = [];
request(getOptions, function (error, response, body) {
    parsed = JSON.parse(body);
    console.log(parsed.length);
    //// Converting JSON data into our array objects.
    //parsed.forEach(function (item) {
    //            item.isPublished = false;
    //});


parsed.forEach(function (verifierProduct) {
    http.get(verifierProduct.redirectUrl, function (response) {

        console.log("reponseCode:  " + response.statusCode);
        if (response.statusCode != 400) {
            verifierProduct.isPublished = body.indexOf(verifierProduct.shortDescription) > -1 && body.indexOf(verifierProduct.discount) > -1 && body.indexOf(verifierProduct.actualPrice) > -1 && body.indexOf(verifierProduct.sellingPrice) > -1;
        }
        else {
            console.log("this url is incorrect: " + verifierProduct.redirectUrl);
            verifierProduct.isPublished = false;
        }
    });
});
//console.log(verifierArray);
console.log(parsed.length);

    //Begin Put: to update records (parse search parameters)

parsed.forEach(function (pushingItem) {
    url = "http://localhost:16193/api/productstage/" + pushingItem.id;
    console.log(url);
var updateOptions = {
    method: 'PUT',
    url: url,
    headers: {
        'Content-Type': 'application/json'
    },
    json: {
        "categoryId": pushingItem.categoryId,
        "shortDescription": pushingItem.shortDescription,
        "description": pushingItem.description,
        "redirectUrl": pushingItem.redirectUrl,
        "imageUrl": pushingItem.imageUrl,
        "storeName": pushingItem.storeName,
        "actualPrice": pushingItem.actualPrice,
        "currentPrice": pushingItem.currentPrice,
        "discountPercentage": pushingItem.discountPercentage,
        "isShippingFree": pushingItem.isShippingFree,
        "star": pushingItem.star,
        "isPublished": true,
        "showDate": pushingItem.showDate,
        "source": pushingItem.source,
        "createdData": "1/1/2015",
        "lastUpdateData": "1/1/2015"
    }
};
    request(updateOptions, function (error, response, body) {
        console.log(response.statusCode);
    });
});

});
