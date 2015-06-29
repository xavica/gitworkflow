var _ = require('lodash');
var TvDealsLinks = [
//Telivisions 
{
    url: "http://www.tvdeal.in/Regular-LED-Televisions",
    selectors: {
        elements: 'div[class*="three"]',
        title: 'div.image > a > img',
        description: '',
        imageUrl: 'div.image > a > img',
        actualPrice: 'div.price > span.price-old',
        sellingPrice: 'div.price > span.price-new',
        discount: '',
        redirectUrl: 'div.image'
    },
    isScroll: false,
    id: 5
// },
// // LED Tv's
// {
//     url: "http://www.tvdeal.in/Smart-LED-TV",
//     selectors: {
//        elements: 'div[class*="three"]',
//         title: 'div.image > a > img',
//         description: '',
//         imageUrl: 'div.image > a > img',
//         actualPrice: 'div.price > span.price-old',
//         sellingPrice: 'div.price > span.price-new',
//         discount: '',
//         redirectUrl: 'div.image > a'
//     },
//     isScroll: false,
//     id: 5
// },
// // Telivisions LED
// {
//     url: "http://www.tvdeal.in/Smart-Plus-3D-LED-TVs?limit=15",
//     selectors: {
//        elements: 'div[class*="three"]',
//         title: 'div.image > a > img',
//         description: '',
//         imageUrl: 'div.image > a > img',
//         actualPrice: 'div.price > span.price-old',
//         sellingPrice: 'div.price > span.price-new',
//         discount: '',
//         redirectUrl: 'div.image > a'
//     },
//     isScroll: false,
//     id: 5
}];


var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];

TvDealsLinks.forEach(function (TvDealsCrawler) {
    casper.thenOpen(TvDealsCrawler.url, function () {
        if (!this.exists(TvDealsCrawler.selectors.elements) ||
                !this.exists(TvDealsCrawler.selectors.title) ||
                !this.exists(TvDealsCrawler.selectors.actualPrice) || 
                !this.exists(TvDealsCrawler.selectors.sellingPrice) || 
                !this.exists(TvDealsCrawler.selectors.redirectUrl) || 
                !this.exists(TvDealsCrawler.selectors.imageUrl)) {
                           this.emit('selector.changed');
                        }
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
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                for (var i = 0; i < elements.length; i++) {
                    var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                    var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || '';
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
    casper.on('selector.changed', function () {
        this.echo("from emit method");
    });
    });

casper.run();