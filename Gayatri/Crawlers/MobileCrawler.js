var MobileLinks = [{

    url: "http://www.amazon.in/s/ref=sr_abn_pp_ss_1389432031?ie=UTF8&bbn=1389432031&rh=n%3A1389432031",
    selectors: {
        elements: 'li[data-asin *="B00"]',
        title: 'h3 > a > span',
        description: '',
        imageUrl: '',
        actualPrice: 'ul > li.newp > div > a > del',
        sellingPrice: 'ul > li.newp > div > a > span',
        discount: 'ul > li:nth-child(2) > span:nth-child(2)',
        redirectUrl: ''
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/s/ref=lp_1389432031_pg_2?rh=n%3A976419031%2Cn%3A%21976420031%2Cn%3A1389401031%2Cn%3A1389432031&page=2&ie=UTF8&qid=1430395031",
    selectors: {
        elements: 'li[data-asin *="B00"]',
        title: 'h3 > a > span',
        description: '',
        imageUrl: '',
        actualPrice: 'ul > li.newp > div > a > del',
        sellingPrice: 'ul > li.newp > div > a > span',
        discount: 'ul > li:nth-child(2) > span:nth-child(2)',
        redirectUrl: ''
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976419031%2Cn%3A%21976420031%2Cn%3A1389401031%2Cn%3A1389432031&page=3&ie=UTF8&qid=1430712034",
    selectors: {
        elements: 'li[data-asin *="B00"]',
        title: 'h3 > a > span',
        description: '',
        imageUrl: '',
        actualPrice: 'ul > li.newp > div > a > del',
        sellingPrice: 'ul > li.newp > div > a > span',
        discount: 'ul > li:nth-child(2) > span:nth-child(2)',
        redirectUrl: ''
    },
    isScroll: false
} ,
{
    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976419031%2Cn%3A%21976420031%2Cn%3A1389401031%2Cn%3A1389432031&page=4&ie=UTF8&qid=1430713798",
    selectors: {
        elements: 'li[data-asin *="B00"]',
        title: 'h3 > a > span',
        description: '',
        imageUrl: '',
        actualPrice: 'ul > li.newp > div > a > del',
        sellingPrice: 'ul > li.newp > div > a > span',
        discount: 'ul > li:nth-child(2) > span:nth-child(2)',
        redirectUrl: ''
    },
    isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
MobileLinks.forEach(function (MobileCrawler) {
    casper.thenOpen(MobileCrawler.url, function () {
        this.echo("---------------------");
        var parsedItems = casper.evaluate(function (stubCrawler) {
            var tempProducts = [];
            var elements = document.querySelectorAll(stubCrawler.selectors.elements);
            for (var i = 0; i < elements.length; i++) {
                //__utils__.echo("i am inside Foreach");
                var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                var discountPriceElement = elements[i].querySelector(stubCrawler.selectors.discountPrice);
                var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);

                var title = titleElement && titleElement.textContent.trim() || '';
                var actualPrice = actualPriceElement && actualPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
                var discountPrice = discountPriceElement && discountPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
                var str = discountElement && discountElement.innerText || 0;
                var discount = str && str.substring(str.indexOf('(') + 1, str.indexOf('(') + 3).replace(/[^0-9]/g, '') || 0;

                if (title && discount) {
                    __utils__.echo(title);
                    tempProducts.push({
                        "title": title,
                        "actualPrice": actualPrice,
                        "discountPrice": discountPrice,
                        "discount": discount
                    });
                }
            }
            return tempProducts;
        }, MobileCrawler);
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