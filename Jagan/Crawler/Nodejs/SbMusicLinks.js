﻿
var SbMusicLinks = [
// Sb music Links 
// Musical Instruments
{
    url: "http://www.sbmusic.in/Guitars-depid-149289-page-1.html#page=1&sort=discount,desc",
    selectors: {
        elements: '.rightnav .catprodleft',
        title: '.catproduct > a',
        description: '',
        imageUrl: 'div.lnhghtimg > img',
        actualPrice: 'span.linecut.leftnav',
        sellingPrice: 'span.rightnav.mainmenucolor.ml10',
        discount: '',
        redirectUrl: 'div.catprodimg.leftnav.mt5 > a'
    },
    isScroll: false,
    id: 14
},
// Sb Music Links
//Musical Instruments
{
    url: "http://www.sbmusic.in/Drums-depid-149290-page-1.html#sort=discount,desc&page=3",
    selectors: {
        elements: '.rightnav .catprodleft',
        title: '.catproduct > a',
        description: '',
        imageUrl: 'div.lnhghtimg > img',
        actualPrice: 'span.linecut.leftnav',
        sellingPrice: 'span.rightnav.mainmenucolor.ml10',
        discount: '',
        redirectUrl: 'div.catprodimg.leftnav.mt5 > a'
    },
    isScroll: false,
    id: 14
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
SbMusicLinks.forEach(function (SbMusicCrawler) {
    casper.thenOpen(SbMusicCrawler.url, function () {
        this.echo("----------------------------------------");
        if (SbMusicCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(SbMusicCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(SbMusicCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(SbMusicCrawler.selectors.elements, function () { });
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
                    var discount = Math.floor(((actualPrice - sellingPrice) * 100) / actualPrice) + 1;
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
            }, SbMusicCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing SbMusic items to ProductStage Table.
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
                StoreName: "SbMusic",
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
    this.echo("pushed  SbMusic items to productstage table");
});
////Getting products from ProductStageTable

casper.run();