var cameraLinks = [{

    url: "http://www.amazon.in/s/ref=sr_pg_1?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&bbn=1375458031&ie=UTF8&qid=1430477874",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'a > h2',
        description: '',
        imageUrl: '',
        actualPrice: 'span.a-text-strike',
        discountPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: ''
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=2&bbn=1375458031&ie=UTF8&qid=1426669276",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'a > h2',
        description: '',
        imageUrl: '',
        actualPrice: 'span.a-text-strike',
        discountPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: ''
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=3&bbn=1375458031&ie=UTF8&qid=1430477915",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'a > h2',
        description: '',
        imageUrl: '',
        actualPrice: 'span.a-text-strike',
        discountPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: ''
    },
    isScroll: false
},
{
    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=4&bbn=1375458031&ie=UTF8&qid=1430477941",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'a > h2',
        description: '',
        imageUrl: '',
        actualPrice: 'span.a-text-strike',
        discountPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: ''
    },
    isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
cameraLinks.forEach(function (cameraCrawler) {
    casper.thenOpen('http://www.amazon.in/s/ref=sr_pg_1?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&bbn=1375458031&ie=UTF8&qid=1430477874', function () {
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
        }, cameraCrawler);
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