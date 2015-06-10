var booksLinks = [{
        url: "http://www.flipkart.com/books/~bestsellers/pr?sid=bks&otracker=clp_books_clp%2FProductsExpand_0-6__viewAll",
        selectors: {
            elements: 'div[data-pid*="978"]',
            title: '.pu-title',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: '.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true
    },
    {

    url: "http://www.amazon.in/s/ref=sr_il_to_stripbooks?rh=n%3A976389031%2Ck%3Abooks&keywords=books&ie=UTF8&qid=1430912952&lo=none",
    selectors: {
        elements: '.s-result-item',
        title: 'a > h2',
        description: '',
        imageUrl: 'a > img',
        actualPrice: '.a-text-strike',
        sellingPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: 'div > a'
    },
    isScroll: false
    },
    //{
        //url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976389031%2Ck%3Abooks&page=2&d=1&keywords=books&ie=UTF8&qid=1430912969&lo=none",
        //selectors: {
        //    elements: '.s-result-item',
        //    title: 'a > h2',
        //    description: '',
        //    imageUrl: 'a > img',
        //    actualPrice: 'span.a-text-strike',
        //    sellingPrice: 'a > span',
        //    discount: 'span.a-size-small.a-color-price',
        //    redirectUrl: 'div > a'
        //},
        //isScroll: false
    //},
    {
        url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976389031%2Ck%3Abooks&page=3&d=1&keywords=books&ie=UTF8&qid=1430913377&lo=none",
        selectors: {
            elements: '.s-result-item',
            title: 'a > h2',
            description: '',
            imageUrl: '',
            actualPrice: 'span.a-text-strike',
            sellingPrice: 'a > span',
            discount: 'span.a-size-small.a-color-price',
            redirectUrl: 'div > a'
        },
        isScroll: false
    },
    {
        url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976389031%2Ck%3Abooks&page=4&d=1&keywords=books&ie=UTF8&qid=1430913438&lo=none",
        selectors: {
            elements: '.s-result-item',
            title: 'a > h2',
            description: '',
            imageUrl: '',
            actualPrice: 'span.a-text-strike',
            sellingPrice: 'a > span',
            discount: 'span.a-size-small.a-color-price',
            redirectUrl: ''
        },
        isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
booksLinks.forEach(function (booksCrawler) {
    casper.thenOpen(booksCrawler.url, function () {
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

                var title = titleElement && titleElement.innerText.trim() || '';
                var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                var str = discountElement && discountElement.textContent || '';
                var discount = str && str.substring(str.indexOf('(') + 1, str.indexOf('(') + 3).replace(/[^0-9]/g, '') || 0;
                var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';
                __utils__.echo(redirectUrl);


                if (redirectUrl.startsWith("http")) {
                  
                    parser.href = stubCrawler.url;
                    var host = parser.protocol + "//" + parser.hostname;
                    var temp = redirectUrl.startsWith("/") && redirectUrl || "/" + redirectUrl;
                    fullRedirectUrl = host + temp;
                   
                    __utils__.echo("if");
                }
                else {
                    fullRedirectUrl = redirectUrl;                  
                    __utils__.echo("else");
                }

                if (title && discount && actualPrice && redirectUrl) {
                    //__utils__.echo("-----------------");
                    __utils__.echo(title);
                    //__utils__.echo(imageUrl);
                    __utils__.echo(redirectUrl);
                    //__utils__.echo(actualPrice);
                    //__utils__.echo(sellingPrice);
                    //__utils__.echo(discount);
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
        }, booksCrawler);
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