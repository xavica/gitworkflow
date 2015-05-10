var laptopLinks = [{
    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_0_6?url=search-alias%3Dcomputers&field-keywords=laptop&sprefix=laptop%2Ccomputers%2C292",
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
    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Ck%3Alaptop&page=2&keywords=laptop&ie=UTF8&qid=1430888955",
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
    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Ck%3Alaptop&page=3&keywords=laptop&ie=UTF8&qid=1430889000",
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
    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976392031%2Ck%3Alaptop&page=4&keywords=laptop&ie=UTF8&qid=1430889030",
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
laptopLinks.forEach(function (laptopCrawler) {
    casper.thenOpen(laptopCrawler.url, function () {
        this.echo("----------------------------------------");
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
                var discount = str && str.substring(str.indexOf('(') + 1, str.indexOf('(') + 3).replace(/[^0-9]/g, '') || 0;
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
                    __utils__.echo(fullRedirectUrl);
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
        }, laptopCrawler);
        if (parsedItems) {
            for (var i = 0; i < parsedItems.length; i++) {
                productsList.push(parsedItems[i]);
            }
        }
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