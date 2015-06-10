var gameLinks = [{
    url: "http://www.flipkart.com/gaming-consoles/pr?q=game+console&as=on&as-show=on&otracker=start&sid=4rr%2Cnqk&as-pos=1_1_ic_game+console",
    selectors: {
        elements: 'div[data-pid*="GMC"]',
        title: 'div.pu-title > a',
        description: '',
        imageUrl: 'a.pu-image > img',
        actualPrice: '.pu-old',
        sellingPrice: 'div.pu-final > span',
        discount: 'span.pu-off-per',
        redirectUrl: 'div.pu-title > a'
    },
    isScroll: true
},
{
    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_1_12?url=search-alias%3Dtoys&field-keywords=game+console&sprefix=game+console%2Cundefined%2C347",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'div.a-row > a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'span.a-text-strike',
        sellingPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: 'div.a-row.a-spacing-none > a'
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/Games/b/ref=sv_t_2?ie=UTF8&node=1378311031",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'div.a-row > a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'span.a-text-strike',
        sellingPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: 'div.a-row.a-spacing-none > a'
    },
    isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
gameLinks.forEach(function (gameCrawler) {
    casper.thenOpen(gameCrawler.url, function () {
        this.echo("----------------------------------------");
        if (gameCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(gameCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(gameCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(gameCrawler.selectors.elements, function () { });
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
                    if (title && discount && actualPrice && redirectUrl) {
                        __utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        //__utils__.echo(actualPrice);
                        //__utils__.echo(sellingPrice);
                        __utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        tempProducts.push({
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
            }, gameCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});

casper.then(function () {

    //Apply filter logic
})
casper.then(function () {
    this.echo(productsList.length);
    //apply ranking logic
})
casper.then(function () {
    this.echo(productsList.length);
    //Then push to server
})
casper.run();