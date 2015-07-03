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
var Q = require('q');
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

var parsed = [];

function Toller() {
    var that = this;
    this._products = [];

    function verifyProduct(product) {
        var deferred = Q.defer();

        http.get(product.redirectUrl, function (response) {
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                if (response.statusCode !== 400 && response.statusCode !== 500) {
                    product.isPublished = body.indexOf(product.shortDescription) > -1 || body.indexOf(product.discount) > -1
                                                || body.indexOf(product.actualPrice) > -1 || body.indexOf(product.sellingPrice) > -1;
                }
                else {
                    logAppend("URL Incorrect::" + product.redirectUrl + "\r\n");
                    product.isPublished = false;
                }
                deferred.resolve(true);

            });

        });
        return deferred.promise;
    }

    function updateProduct(product) {
        var deferred = Q.defer();

        var url = urlsConfig.productUpdate + product.id,
            updateOptions = {
                method: 'PUT',
                url: url,
                headers: {
                    'Content-Type': 'application/json'
                },
                json: {
                    "categoryId": product.categoryId,
                    "shortDescription": product.shortDescription,
                    "description": product.description,
                    "redirectUrl": product.redirectUrl,
                    "imageUrl": product.imageUrl,
                    "storeName": product.storeName,
                    "actualPrice": product.actualPrice,
                    "currentPrice": product.currentPrice,
                    "discountPercentage": product.discountPercentage,
                    "isShippingFree": product.isShippingFree,
                    "star": product.star,
                    "isPublished": product.isPublished,
                    "showDate": product.showDate,
                    "source": product.source
                }
            };
        request(updateOptions, function (error, response, body) {
            if (response.statusCode !== 400 && response.statusCode !== 500) {
                logAppend("Updated URL ID:: [ " + product.id + " ]\r\n");
                deferred.resolve(true);
            }
            else {
                deferred.reject('Error while updating Product' + product.id);
            }
        });
        return deferred.promise;
    }

    this.getProducts = function () {
        var deferred = Q.defer(),
            message = '',
            options = {
                method: 'GET',
                url: urlsConfig.productsGetall,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        console.log('Started Extraction of Products from Products Table');
        request(options, function (error, response, body) {
            if (response.statusCode !== 200) {
                deferred.reject('Having an issue with getlist of Product:' + options.url);
            }
            else {
                that._products = JSON.parse(body);
                logAppend(starStringWithNewLine);
                message = "Total Products Extracted From Products Table:: " + that._products.length ;
                logAppend(message + "\r\n");
                console.log(message);
                deferred.resolve(that._products);
            }

        });
        return deferred.promise;
    };

    this.verfifyProducts = function () {
        console.log('Started Verifying of Products By opening target Redirect URL');
        var lastPromise = that._products.reduce(function (promise, product) {
            return promise.then(function (result) {
                //if (result) {
                //    //Console.log (previous file downloaded);
                //}
                return verifyProduct(product);
            }, function (err) {
                console.log(err);
            });
        }, Q.resolve());
        lastPromise.then(function () {
            var productsVerified = _.filter(that._products, function (product) {
                return product.isPublished;
            });
            console.log('Total Products Verified::' + that._products.length);
            console.log('Total Products are in Target Website::' + productsVerified.length);
            console.log('Total Products are not in Target Website::' + (that._products.length - productsVerified.length));

        });
        return lastPromise;
    };

    this.updateProducts = function () {
        var lastPromise = that._products.reduce(function (promise, product) {
            return promise.then(function (result) {
                //if (result) {
                //    //Console.log (previous file downloaded);
                //}
                return updateProduct(product);
            }, function (err) {
                console.log(err);
            });
        }, Q.resolve());
        lastPromise.then(function () {
            console.log('Total Products Updated::' + that._products.length);
        });
        return lastPromise;
    };

}

var toller = new Toller();
console.log("**********************************************************************");
logAppend(starStringWithNewLine);
toller.getProducts()
    .then(toller.verfifyProducts)
    //.then(toller.updateProducts)
    .then(function () {
        console.log('Finished Toll Process');
    }, function (err) {

    });


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