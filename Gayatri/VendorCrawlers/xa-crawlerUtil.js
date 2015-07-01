/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

//var Q = require('q');
//var request = require("request");
//var log4js = require('log4js');
//var logger = log4js.getLogger('uploader');
var _ = require('lodash');

exports.defaultScroll = function (casper, crawlerDefinition) {
    if (crawlerDefinition.isScroll === true) {
        casper.scrollToBottom();
        casper.waitForSelectorTextChange(crawlerDefinition.selectors.elements, function () {
            casper.echo('completed First scroll');
        });
        casper.then(function () {
            casper.scrollToBottom();
            casper.waitForSelectorTextChange(crawlerDefinition.selectors.elements, function () {
                casper.echo('completed Second scroll');
            });
        });
        casper.then(function () {
            casper.scrollToBottom();
            casper.waitForSelectorTextChange(crawlerDefinition.selectors.elements, function () {
                casper.echo('completed Third scroll');
            });
        });
    }
};

exports.parseUrls = function (vendorLinks, casper) {
    var productsList = [];
    vendorLinks.forEach(function (vendorLink) {
        casper.thenOpen(vendorLink.url, function (response) {
            var parsedItems = [], proceed = true;
            casper.echo("*********************************************************");
            casper.echo("Opening Link ::" + vendorLink.url);
            casper.then(function () {
                if (response.status === undefined || response.status >= 400) {
                    proceed = false;
                    this.emit('url.failed', vendorLink);
                }
            });
            //casper.echo("Opened Url, Identifying Selectors");
            casper.then(function () {
                if (proceed && (!this.exists(vendorLink.selectors.elements) ||
                             !this.exists(vendorLink.selectors.title) ||
                             !this.exists(vendorLink.selectors.actualPrice) ||
                             !this.exists(vendorLink.selectors.sellingPrice) ||
                             !this.exists(vendorLink.selectors.redirectUrl) ||
                             !this.exists(vendorLink.selectors.imageUrl))) {
                    proceed = false;
                    this.emit('selector.changed', vendorLink);
                }
            });
            casper.then(function () {
                if (proceed) {
                    exports.defaultScroll(casper, vendorLink);
                }
            });

            casper.then(function () {
                //----------------------   if selectors not there, then below else wont get executed.

                if (proceed) {
                    parsedItems = casper.evaluate(function (stubCrawler) {
                        "use strict";
                        var index = 0,
                            tempProducts = [],
                            parser = document.createElement('a'),
                            elements = document.querySelectorAll(stubCrawler.selectors.elements),
                            titleElement,
                            actualPriceElement,
                            sellingPriceElement,
                            discountElement,
                            redirectUrlElement,
                            imageUrlElement,
                            imageUrlAttributeName,
                            tempImageUrl,
                            fullRedirectUrl,
                            title,
                            actualPrice,
                            sellingPrice,
                            discount,
                            tempDiscountFullString,
                            tempDiscountArray,
                            redirectUrl,
                            imageUrl,
                            tempUrl,
                            host;
                        //__utils__.echo('started document parsing');
                        __utils__.echo("** STARTED PROCESSING URL ** ");
                        for (index = 0; index < elements.length; index = index + 1) {
                            titleElement = elements[index].querySelector(stubCrawler.selectors.title);
                            actualPriceElement = elements[index].querySelector(stubCrawler.selectors.actualPrice);
                            sellingPriceElement = elements[index].querySelector(stubCrawler.selectors.sellingPrice);
                            if (!stubCrawler.selectors.discount) {
                                discountElement = '';
                            }
                            else {
                                discountElement = elements[index].querySelector(stubCrawler.selectors.discount);
                            }
                            redirectUrlElement = elements[index].querySelector(stubCrawler.selectors.redirectUrl);
                            imageUrlElement = elements[index].querySelector(stubCrawler.selectors.imageUrl);
                            fullRedirectUrl = '';

                            title = (titleElement && titleElement.getAttribute('title')) || (titleElement && titleElement.innerText.replace(/\W+/g, " ")) || '';
                            actualPrice = (actualPriceElement && actualPriceElement.innerText) || '';
                            actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                            sellingPrice = (sellingPriceElement && sellingPriceElement.innerText) || '';
                            sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                            tempDiscountFullString = (discountElement && discountElement.textContent) || '';
                            tempDiscountArray = tempDiscountFullString.split("(");
                            if (tempDiscountArray.length > 1) {
                                tempDiscountArray[0] = tempDiscountArray[0].trim();
                                tempDiscountArray[1] = tempDiscountArray[1].trim();
                                tempDiscountArray[1] = tempDiscountArray[1].replace(/[^0-9]/g, '');
                                discount = tempDiscountArray[1];
                            } else {
                                tempDiscountArray[0] = tempDiscountArray[0].trim();
                                tempDiscountArray[0] = tempDiscountArray[0].replace(/[^0-9]/g, '');
                                discount = tempDiscountArray[0];
                            }
                            if (!discount && sellingPrice && actualPrice) {
                                discount = Math.floor(((+actualPrice - +sellingPrice) * 100) / +actualPrice) + 1;
                            }

                            redirectUrl = (redirectUrlElement && redirectUrlElement.getAttribute('href')) || '';
                            imageUrlAttributeName = stubCrawler.selectors.imageUrlAttribute || 'src';
                            tempImageUrl = (imageUrlElement && imageUrlElement.getAttribute(imageUrlAttributeName)) || '';

                            if (!tempImageUrl.match("^http")) {
                                parser.href = stubCrawler.url;
                                host = parser.protocol + "//" + parser.hostname;
                                tempUrl = (tempImageUrl.match("^/") && tempImageUrl) || "/" + tempImageUrl;
                                imageUrl = host + tempUrl;
                            }
                            else {
                                imageUrl = tempImageUrl;
                            }

                            if (!redirectUrl.match("^http")) {
                                parser.href = stubCrawler.url;
                                host = parser.protocol + "//" + parser.hostname;
                                tempUrl = (redirectUrl.match("^/") && redirectUrl) || "/" + redirectUrl;
                                fullRedirectUrl = host + tempUrl;
                            } else {
                                fullRedirectUrl = redirectUrl;
                            }
                            if (title && discount && actualPrice && redirectUrl) {
                                //__utils__.echo(title);
                                //__utils__.echo(imageUrl);
                                //__utils__.echo(actualPrice);
                                //__utils__.echo(sellingPrice);
                                //__utils__.echo(discount);
                                //__utils__.echo(fullRedirectUrl);
                                tempProducts.push({
                                    "id": stubCrawler.id,
                                    "title": title,
                                    "actualPrice": actualPrice,
                                    "sellingPrice": sellingPrice,
                                    "discount": discount,
                                    "redirectUrl": fullRedirectUrl,
                                    "imageUrl": imageUrl
                                });
                            }
                        }
                        __utils__.echo("** COMPLETED URL ** ");
                        return tempProducts;
                    }, vendorLink);

                }
            });
            casper.then(function () {
                if (parsedItems) {
                    _.each(parsedItems, function (item) {
                        productsList.push(item);
                    });
                }
            });
        });
    });
    return productsList;

};

exports.defaultPushToStage = function (productsList, storeName, casper) {
    //Creating proper input array.
    var batchSize = 100,
        d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('/'),
        pushingArray = [],
        productListToPush = productsList.map(function (item) {
            return {
                CategoryId: item.id,
                ShortDescription: item.title,
                Description: item.title,
                RedirectUrl: item.redirectUrl,
                ImageUrl: item.imageUrl,
                StoreName: storeName,
                ActualPrice: item.actualPrice,
                CurrentPrice: item.sellingPrice,
                DiscountPercentage: item.discount,
                IsShippingFree: 1,
                Star: 4,
                IsPublished: 0,
                ShowDate: dformat,
                Source: "Crawler",
                CreatedDate: dformat,
                LastUpdateDate: dformat
            };
        });
    //casper.echo("--------------------------------------------------------");
    //casper.echo("Total products extracted From  "  + storeName + "  are:: " + productListToPush.length);
    pushingArray = _.chunk(productListToPush, batchSize);
    //casper.echo("No.of Chunks for Batch Push:   " + pushingArray.length + " Of each batch 20");

    pushingArray.forEach(function (batchArray) {

        casper.thenOpen('http://web.xavica.local/tdweb/api/productstagebulk', {
            method: 'post',
            data: JSON.stringify(batchArray),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    });
    casper.then(function () {
        casper.echo(storeName + "  Products Pushed To 'Productstage' Table");
    });
};

