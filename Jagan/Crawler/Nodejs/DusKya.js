﻿
var DusKyaLinks = [
// Sun Glasses
{
    url: "http://www.10kya.com/fashion/men/sunglasses-eyewear.html",
    selectors: {
        elements: '.products-grid>.item',
        title: 'h2 > a',
        description: '',
        imageUrl: 'div > a > img',
        actualPrice: '.price-box .old-price .price',
        sellingPrice: '.price-box .special-price .price',
        discount: '.cataloglabel-badgecat.position-BR > span',
        redirectUrl: 'h2 > a'
    },
    isScroll: false,
    id: 6
},
{
    url: "http://www.10kya.com/fashion/men/mens-watches.html#page=1&top=1600& deals",
    selectors: {
        elements: '.products-grid>.item',
        title: 'h2 > a',
        description: '',
        imageUrl: 'div > a > img',
        actualPrice: '.price-box .old-price .price',
        sellingPrice: '.price-box .special-price .price',
        discount: '.cataloglabel-badgecat.position-BR > span',
        redirectUrl: 'h2 > a'
    },
    isScroll: false,
    id: 6
},
{
    url: "http://www.10kya.com/fashion/men/men-s-footwear.html",
    selectors: {
        elements: '.products-grid>.item',
        title: 'h2 > a',
        description: '',
        imageUrl: 'div > a > img',
        actualPrice: '.price-box .old-price .price',
        sellingPrice: '.price-box .special-price .price',
        discount: '.cataloglabel-badgecat.position-BR > span',
        redirectUrl: 'h2 > a'
    },
    isScroll: false,
    id: 6
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
DusKyaLinks.forEach(function (DusKyaCrawler) {
    casper.thenOpen(DusKyaCrawler.url, function () {
        this.echo("----------------------------------------");
        if (DusKyaCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(DusKyaCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(DusKyaCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(DusKyaCrawler.selectors.elements, function () { });
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

                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
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
            }, DusKyaCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing DusKya items to ProductStage Table.
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
                StoreName: "DusKya",
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
    this.echo("pushed  DusKya items to productstage table");
});
////Getting products from ProductStageTable

casper.run();