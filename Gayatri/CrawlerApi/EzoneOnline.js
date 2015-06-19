﻿var _ = require('lodash');
var EzoneOnlineLinks = [
    //Air Conditioners
{
    url: "http://www.ezoneonline.in/Categories/Home-Appliances/Air-Conditioners/c/airconditioners?gclid=CjwKEAjwndqrBRC16IyeqPicp3ASJAB-vB-cDB02AmeoTzxi0c6ceGwHyn0Wgnqy9c13cvVqajFayRoCP5Lw_wcB",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 8
},
//Mobiles
{
    url: "http://www.ezoneonline.in/Categories/Phones/Mobile-Phones/c/mobilephones",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 3
},
//Mobiles
{
    url: "http://www.ezoneonline.in/Categories/Phones/Mobile-Phones/c/mobilephones?q=%3Aproduct-boost&page=1",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 3
},
//camera
{
    url: "http://www.ezoneonline.in/Categories/Photography/Digital-SLR-Cameras/c/digitalslrcameras",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 4
},
//Televisions
{
    url: "http://www.ezoneonline.in/Categories/Home-Entertainment/LCD-LED-Plasma-TV/c/lcdledplasmatv?sort=topRated&q=%3Aprice-asc#",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 5
},
//Laptops
{
    url: "http://www.ezoneonline.in/Categories/Computers/Laptops-%26-Macbooks/Laptops/c/laptops",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 1
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
EzoneOnlineLinks.forEach(function (EzoneOnlineCrawler) {
    casper.thenOpen(EzoneOnlineCrawler.url, function () {
        this.echo("----------------------------------------");
        if (EzoneOnlineCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(EzoneOnlineCrawler.selectors.elements, function () {
                this.echo("first scroll over");
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(EzoneOnlineCrawler.selectors.elements, function () {
                    this.echo("second scroll over");
                });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(EzoneOnlineCrawler.selectors.elements, function () {
                    this.echo("third scroll over");
                });
            });
        }
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                //__utils__.echo("elements length is : " + elements.length);

                for (var i = 0; i < elements.length; i++) {
                    //__utils__.echo("this is iteration : " + i);

                    var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                    var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                    var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var str = discountElement && discountElement.textContent || '';
                    var k = str.split("(");
                    if (k.length > 1) {
                        k[0] = k[0].trim(); k[1] = k[1].trim(); k[1] = k[1].replace(/[^0-9]/g, ''); discount = k[1];
                    }
                    else {
                        k[0] = k[0].trim(); k[0] = k[0].replace(/[^0-9]/g, ''); discount = k[0];
                    }
                    var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                    var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                    if (!redirectUrl.match("^http")) {
                        parser.href = stubCrawler.url;
                        var host = parser.protocol + "//" + parser.hostname;
                        var temp = redirectUrl.match("^/") && redirectUrl || "/" + redirectUrl;
                        fullRedirectUrl = host + temp;
                    }
                    else {
                        fullRedirectUrl = redirectUrl;
                    }
                    if (title && actualPrice && redirectUrl) {
                        __utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        //__utils__.echo(actualPrice);
                        //__utils__.echo(sellingPrice);
                        //__utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        //__utils__.echo("-----------------------------------");

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
                return tempProducts;
            }, EzoneOnlineCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing items to ProductStage Table.
casper.then(function () {
    //Creating proper input array.
    var productListToPush = productsList.map(function (item) {
        return {

            CategoryId: item.id,
            ShortDescription: item.title,
            Description: item.title,
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "EzoneOnline",
            ActualPrice: item.actualPrice,
            CurrentPrice: item.sellingPrice,
            DiscountPercentage: item.discount,
            IsShippingFree: 1,
            Star: 4,
            IsPublished: 0,
            ShowDate: "1/1/2015",
            Source: "Crawler",
            CreatedDate: "1/1/2015",
            LastUpdateDate: "1/1/2015"
        }
    });
    this.echo("productListToPush  :  " + productListToPush.length);
    var batchSize = 5;
    var pushingArray = [];
    pushingArray = _.chunk(productListToPush, batchSize);
    this.echo(pushingArray.length);

    pushingArray.forEach(function (batchArray) {
        casper.thenOpen('http://localhost:16193/api/productstagebulk', {
            method: 'post',
            data: JSON.stringify(batchArray),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    });
    this.echo("pushed items to productstage table");
});
casper.run();