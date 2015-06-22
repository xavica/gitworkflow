﻿var _ = require('lodash');
var jobongLinks = [
// Sunglasses
{
    url: "http://www.jabong.com/men/accessories/sunglasses/?sort=discount&dir=desc",
    selectors: {
        elements: 'section.p-list > ul > li',
        title: 'span.qa-brandTitle',
        description: '',
        imageUrl: 'img.itm-img',
        actualPrice: 'a > span.price > strike',
        sellingPrice: 'a > span.price > strong.qa-price',
        discount: 'a > span.price >span.discount',
        redirectUrl: 'li.added > a'
    },
    isScroll: false,
    id: 6
    },
    //Watches
    {
        url: "http://www.jabong.com/men/accessories/watches/?sort=discount&dir=desc",
        selectors: {
            elements: 'section.p-list > ul > li',
            title: 'span.qa-brandTitle',
            description: '',
            imageUrl: 'img.itm-img',
            actualPrice: ' a > span.price > strike',
            sellingPrice: 'a > span.price > strong.qa-price',
            discount: 'a > span.price >span.discount',
            redirectUrl: 'li.added > a'
        },
        isScroll: false,
        id: 6
    //},
    ////Shoes
    //{
    //    url: "http://www.jabong.com/men/shoes/sports-shoes/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 6
    //},
    ////Shoes
    //{
    //    url: "http://www.jabong.com/men/shoes/sneakers/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 6
    //},
    ////Shoes
    //{
    //    url: "http://www.jabong.com/men/shoes/casual-shoes/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 6
    //},
    ////Shoes
    //{
    //    url: "http://www.jabong.com/men/shoes/boots/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 6
    //},
    ////Shoes
    //{
    //    url: "http://www.jabong.com/men/shoes/boots/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 6
    //},
    ////Bags
    //{
    //    url: "http://www.jabong.com/men/bags/travel-bags/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 7
    //},
    ////Jewellery
    //{
    //    url: "http://www.jabong.com/women/jewellery/?sort=discount&dir=desc",
    //    selectors: {
    //        elements: 'section.p-list > ul > li',
    //        title: 'span.qa-brandTitle',
    //        description: '',
    //        imageUrl: 'img.itm-img',
    //        actualPrice: ' a > span.price > strike',
    //        sellingPrice: 'a > span.price > strong.qa-price',
    //        discount: 'a > span.price >span.discount',
    //        redirectUrl: 'li.added > a'
    //    },
    //    isScroll: false,
    //    id: 12

}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
jobongLinks.forEach(function (jobongCrawler) {
    casper.thenOpen(jobongCrawler.url, function () {
        this.echo("----------------------------------------");
        if (jobongCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(jobongCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(jobongCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(jobongCrawler.selectors.elements, function () { });
            });
        }
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                for (var i = 0; i < elements.length; i++) {
                    var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                    var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                    var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';
                    //Here code has been changed
                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var discount = Math.floor(((actualPrice - sellingPrice) * 100) / actualPrice);
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
                    if (title && discount && actualPrice && redirectUrl) {
                        __utils__.echo(title);
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
                return tempProducts;
            }, jobongCrawler);
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
            StoreName: "Jabong",
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