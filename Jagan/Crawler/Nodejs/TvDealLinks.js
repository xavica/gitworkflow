﻿
var TvDealsLinks = [
//Telivisions 
{
    url: "http://www.tvdeal.in/Regular-LED-Televisions",
    selectors: {
        elements: 'div.product-grid > div',
        title: 'div.name > a',
        description: '',
        imageUrl: 'div.image > a > img',
        actualPrice: 'div.price > span.price-old',
        sellingPrice: 'div.price > span.price-new',
        discount: '',
        redirectUrl: 'div.name > a'
    },
    isScroll: false,
    id: 5
},
// LED Tv's
{
    url: "http://www.tvdeal.in/Smart-LED-TV",
    selectors: {
        elements: 'div.product-grid > div',
        title: 'div.name > a',
        description: '',
        imageUrl: 'div.image > a > img',
        actualPrice: 'div.price > span.price-old',
        sellingPrice: 'div.price > span.price-new',
        discount: '',
        redirectUrl: 'div.name > a'
    },
    isScroll: false,
    id: 5
},
// Telivisions LED
{
    url: "http://www.tvdeal.in/Smart-Plus-3D-LED-TVs?limit=15",
    selectors: {
        elements: 'div.product-grid > div',
        title: 'div.name > a',
        description: '',
        imageUrl: 'div.image > a > img',
        actualPrice: 'div.price > span.price-old',
        sellingPrice: 'div.price > span.price-new',
        discount: '',
        redirectUrl: 'div.name > a'
    },
    isScroll: false,
    id: 5
}];


var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
TvDealsLinks.forEach(function (TvDealsCrawler) {
    casper.thenOpen(TvDealsCrawler.url, function () {
        this.echo("----------------------------------------");
        if (TvDealsCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(TvDealsCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(TvDealsCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(TvDealsCrawler.selectors.elements, function () { });
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
                    //var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var discount = Math.floor(((actualPrice - sellingPrice) * 100) / actualPrice);
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
                        __utils__.echo(discount);
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
            }, TvDealsCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing TvDeals items to ProductStage Table.
casper.then(function () {
    this.echo(productsList.length);
    productsList.forEach(function (item) {
        casper.thenOpen('http://localhost:16193/api/productstage', {
            method: 'post',
            data: {
                CategoryId: item.id,
                ShortDescription: item.title,
                Description: "Description",
                RedirectUrl: item.redirectUrl,
                ImageUrl: item.imageUrl,
                StoreName: "TvDeals",
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

    });
    this.echo("pushed  TvDeals items to productstage table");
});
////Getting products from ProductStageTable

casper.run();