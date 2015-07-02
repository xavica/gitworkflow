var request = require("request");
var _ = require('lodash-node');
var querystring = require('querystring');
var http = require("http");
fs = require('fs');
var configurations = require('./configurations.js').configurations,
    urlsConfig = configurations.urls;
var starString = "**********************************************************************",
starStringWithNewLine = "**********************************************************************\r\n",
tollString = "",
d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('-'),
logAppend = function (str) {
    tollString += str;
}

// Reteving the productstage table data.
var getOptions = {
    method: 'GET',
    url: urlsConfig.productsGetall,
    headers: {
        'Content-Type': 'application/json'
    },
};
var parsed = [];
request(getOptions, function (error, response, body) {
    parsed = JSON.parse(body);
    logAppend(starStringWithNewLine);
    logAppend("Total Products Extracted From Products Table:: [" + parsed.length + "]\r\n")
    console.log(parsed.length);
    recordCount = parsed.length;

    parsed.forEach(function (verifierProduct) {
        i++;
        http.get(verifierProduct.redirectUrl, function (response) {

            logAppend(starStringWithNewLine);
            if (response.statusCode != 400 && response.statusCode != 500) {
                verifierProduct.isPublished = body.indexOf(verifierProduct.shortDescription) > -1 || body.indexOf(verifierProduct.discount) > -1 || body.indexOf(verifierProduct.actualPrice) > -1 || body.indexOf(verifierProduct.sellingPrice) > -1;
            }
            else {
                logAppend("URL Incorrect::[ " + verifierProduct.redirectUrl + "\r\n");
                verifierProduct.isPublished = false;
            }
            updateProduct(verifierProduct);
        });
            exportToLog(tollString);
    });
});
function updateProduct(pushingItem) {
    url = urlsConfig.productUpdate + pushingItem.id;
    //console.log("update url" + url);
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
            "isPublished": pushingItem.isPublished,
            "showDate": pushingItem.showDate,
            "source": pushingItem.source,
            //"createdDate": "1/1/2015",
            //"lastUpdateDate": "1/1/2015"
        }
    };
    request(updateOptions, function (error, response, body) {
        logAppend("Updated URL ID:: [" + pushingItem.id + "\r\n");
    });
}
function append(file, content, callback) {
    if (fs.appendFile) {
        fs.appendFile(file, content, callback);
    } else {
        fs.write(file, content, 'a');
        callback();
    }
}

function exportToLog(str) {
    var fileName = "logs/" + dformat + "_toll.txt";
    append(fileName, str, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    setTimeout(function () {
    }, Math.floor((Math.random() * 500) + 1000));
}