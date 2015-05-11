var laggageLinks = [{
    url: "http://www.flipkart.com/home-kitchen/home-appliances/air-conditioners/pr?q=air+conditioner&as=on&as-show=on&otracker=start&sid=j9e%2Cabm%2Cc54&as-pos=1_1_ic_air",
        selectors: {

            elements: 'div[data-pid*="ACN"]',
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
    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_1_14?url=search-alias%3Dkitchen&field-keywords=air+conditioner&sprefix=air+conditione%2Cstripbooks%2C278&rh=n%3A976442031%2Ck%3Aair+conditioner",
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
        url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976442031%2Ck%3Aair+conditioner&page=2&keywords=air+conditioner&ie=UTF8&qid=1431138179",
        selectors: {
            elements: 'li[data-asin*="B"]',
            title: 'div.a-row > a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'span.a-text-strike',
            sellingPrice: 'a > span',
            discount: 'span.a-size-small.a-color-price',
           redirectUrl:'div.a-row.a-spacing-none > a'
        },
        isScroll: false
    },
    {
        url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976442031%2Ck%3Aair+conditioner&page=3&keywords=air+conditioner&ie=UTF8&qid=1431138198",
        selectors: {
            elements: 'li[data-asin*="B"]',
            title: 'div.a-row > a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'span.a-text-strike',
            sellingPrice: 'a > span',
            discount: 'span.a-size-small.a-color-price',
           redirectUrl:'div.a-row.a-spacing-none > a'
        },
        isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
laggageLinks.forEach(function (laggageCrawler) {
    casper.thenOpen(laggageCrawler.url, function () {
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
        }, laggageCrawler);
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