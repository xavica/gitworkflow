var jwLinks = [{
    url: "http://www.flipkart.com/search?q=jwellary&as=on&as-show=on&otracker=start&as-pos=1_q_jwe#jumpTo=400|15",
    selectors: {
        elements: 'div[data-pid*="JWS"]',
        title: 'div.pu-title > a',
        description: '',
        imageUrl: 'a.pu-image > img',
        actualPrice: '.pu-old',
        sellingPrice: 'div.pu-final > span',
        discount: 'span.pu-off-per',
        redirectUrl: 'div.pu-title > a'
    },
    isScroll: true
//},
//{
//    url: "http://www.amazon.in/s/ref=fj_deals_35?_encoding=UTF8&bbn=1951048031&ie=UTF8&rh=i%3Ajewelry%2Cn%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-10&pf_rd_r=13KR4K91V6QRD4DCPES9&pf_rd_t=101&pf_rd_p=613780627&pf_rd_i=1951048031",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=2&bbn=1951048031&ie=UTF8&qid=1430911250",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=3&bbn=1951048031&ie=UTF8&qid=1430911489",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=4&bbn=1951048031&ie=UTF8&qid=1430911659",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
jwLinks.forEach(function (jwCrawler) {
    casper.thenOpen(jwCrawler.url, function () {
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
        }, jwCrawler);
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