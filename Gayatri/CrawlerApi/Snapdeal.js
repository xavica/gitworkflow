var _ = require('lodash');
var SnapdealLinks = [
        // Mobiles
{
    url: "http://www.snapdeal.com/products/mobiles-mobile-phones?sort=plrty&",
    selectors: {
        elements: 'div[categoryid="175"]',
        title: 'div > a > img',
        description: '',
        imageUrl: ' div > div.productWrapper > div.outerImg > div > a > img',
        actualPrice: 'div.product-price > div > span > strike',
        sellingPrice: '',
        discount: 'div.product-price > div > span > s',
        redirectUrl: 'div > div.productWrapper > div.outerImg > div > a'
    },
    isScroll: true,
    id: 3
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.options.waitTimeout = 10000;
casper.start();
var productsList = [];
SnapdealLinks.forEach(function (SnapdealCrawler) {
    casper.thenOpen(SnapdealCrawler.url, function () {
        this.echo("----------------------------------------");
        //if (SnapdealCrawler.isScroll === true) {
        //    this.scrollToBottom();
        //    casper.waitForSelectorTextChange(SnapdealCrawler.selectors.elements, function () { });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(SnapdealCrawler.selectors.elements, function () { });
        //    });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(SnapdealCrawler.selectors.elements, function () { });
        //    });
        //}
        //casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                __utils__.echo(elements.length);
                for (var i = 0; i < elements.length; i++) {
                    var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    //var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                    //var sellingPriceElement = elements[i];
                    //var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    //var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    //var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    //var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || '';
                    //var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    //actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    //var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    //sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    //var str = discountElement && discountElement.textContent || '';
                    //var k = str.split("(");
                    //if (k.length > 1) {
                    //    k[0] = k[0].trim(); k[1] = k[1].trim(); k[1] = k[1].replace(/[^0-9]/g, ''); discount = k[1];
                    //}
                    //else {
                    //    k[0] = k[0].trim(); k[0] = k[0].replace(/[^0-9]/g, ''); discount = k[0];
                    //}
                    //var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                    //var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                    //if (!redirectUrl.match("^http")) {
                    //    parser.href = stubCrawler.url;
                    //    var host = parser.protocol + "//" + parser.hostname;
                    //    var temp = redirectUrl.match("^/") && redirectUrl || "/" + redirectUrl;
                    //    fullRedirectUrl = host + "/" + temp;
                    //}
                    //else {
                    //    fullRedirectUrl = redirectUrl;
                    //}
                    //if (title && discount && actualPrice && redirectUrl) {
                        __utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        //__utils__.echo(actualPrice);
                        //__utils__.echo(sellingPrice);
                        //__utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        tempProducts.push({
                            "id": stubCrawler.id,
                            "title": title,
                            //"actualPrice": actualPrice,
                            //"sellingPrice": sellingPrice,
                            //"discount": discount,
                            //"redirectUrl": fullRedirectUrl,
                            //"imageUrl": imageUrl
                        });
                    }
                //}
                return tempProducts;
            }, SnapdealCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
//});

casper.run();