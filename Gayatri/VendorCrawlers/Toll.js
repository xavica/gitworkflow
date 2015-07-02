/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, console, require, exports, __utils__ */
/*global append, exportToLog, updateProduct */
/*jshint onevar: true */
/*jslint white: true */
/*jshint unused: true, node: true */
/*jslint unparam: true, node: true */

var request = require("request");
var _ = require('lodash-node');
var querystring = require('querystring');
var http = require("http");
var fs = require('fs');
var configurations = require('./configurations.js').configurations,
    urlsConfig = configurations.urls,
    starString = "**********************************************************************",
    starStringWithNewLine = "**********************************************************************\r\n",
    tollString = "",
    d = new Date(),
    dformat = [(d.getMonth() + 1),
            d.getDate(),
            d.getFullYear()].join('-'),
    logAppend = function (str) {
        tollString += str;
    };

// Reteving the productstage table data.
var getOptions = {
    method: 'GET',
    url: urlsConfig.productsGetall,
    headers: {
        'Content-Type': 'application/json'
    }
};
var parsed = [];

request(getOptions, function (error, response, body) {
    parsed = JSON.parse(body);
    logAppend(starStringWithNewLine);
    logAppend("Total Products Extracted From Products Table:: [" + parsed.length + "]\r\n");

    console.log(starStringWithNewLine);
    console.log("Total Products Extracted From Products Table:: [" + parsed.length + "]\r\n");

    parsed.forEach(function (verifierProduct) {
        http.get(verifierProduct.redirectUrl, function (response) {

            logAppend(starStringWithNewLine);
            if (response.statusCode !== 400 && response.statusCode !== 500) {
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
    var url = urlsConfig.productUpdate + pushingItem.id,
        updateOptions = {
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
                "source": pushingItem.source
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
    });
}