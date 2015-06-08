var mobileLinks = [{
    url: "http://www.flipkart.com/mobiles/~mobileexclusives/pr?sid=tyy,4io&otracker=nmenu_sub_electronics_0_All%20Exclusive%20Mobiles",
    selectors: {
        elements: 'div[data-pid*="MOB"]',
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
    //    {
    //        url: "http://deals.ebay.in/ebaydeals/mobiles-1",
    //        selectors: {
    //            elements: '.listingblock',
    //            title: 'div.itemtitle > p > a',
    //            description: '',
    //            imageUrl: '',
    //            actualPrice: 'div.itemPriceStriked > p',
    //            sellingPrice: 'div.itemPrice > p',
    //            discount: 'div.discountLabel > div > span',
    //            redirectUrl: ''
    //        },
    //        isScroll: true
},
    {

        url: "http://www.amazon.in/s/ref=amb_link_179803727_1?ie=UTF8&bbn=4192584031&rh=i%3Aelectronics%2Cn%3A976419031%2Cn%3A!1499770031%2Cn%3A!1499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031%2Cn%3A!1499772031%2Cn%3A!1499770031%2Cn%3A!1499770031%2Cn%3A!1499772031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-leftnav&pf_rd_r=0PX4ARTQZFAC6778SCX2&pf_rd_t=101&pf_rd_p=613139487&pf_rd_i=1389432031",
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
    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976419031%2Cn%3A%211499770031%2Cn%3A%211499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031&page=2&bbn=4192584031&ie=UTF8&qid=1430886844",
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
mobileLinks.forEach(function (mobileCrawler) {
    casper.thenOpen(mobileCrawler.url, function () {
        this.echo("---------------------");
        if (mobileCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(mobileCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(mobileCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(mobileCrawler.selectors.elements, function () { });
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
            }, mobileCrawler);
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