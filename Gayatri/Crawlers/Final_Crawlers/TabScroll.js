var TabletLinks = [{
    //url: "http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL",
    //selectors: {
    //    elements: 'div[data-pid*="TAB"]',
    //    title: 'div.pu-title > a',
    //    description: '',
    //    imageUrl: 'a.pu-image > img',
    //    actualPrice: '.pu-old',
    //    sellingPrice: 'div.pu-final > span',
    //    discount: 'span.pu-off-per',
    //    redirectUrl: 'div.pu-title > a'
    //},
    //isScroll: true
    //},
    //{
    url: "http://deals.ebay.in/ebaydeals/tablets-6",
    selectors: {
        elements: '.listingblock',
        title: '',
        description: '',
        imageUrl: 'div.imgListingContainer > a > img',
        actualPrice: 'div.itemPriceStriked > p',
        sellingPrice: 'div.itemPrice > p',
        discount: 'div.discountLabel > div > span',
        redirectUrl: 'div.imgListingContainer > a '
    },
    isScroll: true
    ////},
    //{
    //    url: "http://www.amazon.in/s/ref=sr_pg_1?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&bbn=1375458031&ie=UTF8&qid=1430477874",
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
    //    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=2&bbn=1375458031&ie=UTF8&qid=1426669276",
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
    //    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=3&bbn=1375458031&ie=UTF8&qid=1430477915",
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
    //    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=4&bbn=1375458031&ie=UTF8&qid=1430477941",
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
//casper.options.waitTimeout = 10000;
casper.start();
var productsList = [];
TabletLinks.forEach(function (tabletCrawler) {
    casper.thenOpen(tabletCrawler.url, function () {
        this.echo("---------------------");
        //if (tabletCrawler.isScroll === true) {
        //    this.scrollToBottom();
        //    casper.waitForSelectorTextChange(tabletCrawler.selectors.elements, function () { });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(tabletCrawler.selectors.elements, function () { });
        //    });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(tabletCrawler.selectors.elements, function () { });
        //    });
        //}
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                //var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                for (var i = 0; i < elements.length; i++) {
                    //var titleElement = '';
                    //if (stubCrawler.selectors.title === '')
                    //    titleElement = elements[i];
                    //else
                    //    titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice) || '';
                    //var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                    //var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    //var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    //var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    //var fullRedirectUrl = '';

                    //var title = titleElement && titleElement.getAttribute('title') || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || 0;
                    //actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    //var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    //sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    //var str = discountElement && discountElement.textContent || '';
                    //var discount = str && str.substring(str.indexOf('(') + 1, str.indexOf('%')).replace(/[^0-9]/g, '') || 0;
                    //var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                    //var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                    //if (!redirectUrl.match("^http")) {
                    //    parser.href = stubCrawler.url;
                    //    var host = parser.protocol + "//" + parser.hostname;
                    //    var temp = redirectUrl.match("^/") && redirectUrl || "/" + redirectUrl;
                    //    fullRedirectUrl = host + temp;
                    //}
                    //else {
                    //    fullRedirectUrl = redirectUrl;
                    //}
                    //if (title && discount && actualPrice && redirectUrl) {
                        //__utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        __utils__.echo(actualPrice);
                        ////__utils__.echo(sellingPrice);
                        ////__utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        tempProducts.push({
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
            }, tabletCrawler);
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