var ZansaarLinks = [
    //FURNITURE
{
    url: "http://www.zansaar.com/furniture/living-room-furniture/sofas?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15
},
{
    url: "http://www.zansaar.com/furniture/bedroom-furniture/beds?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15
},
{
    url: "http://www.zansaar.com/furniture/bedroom-furniture/bedside-tables?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15
},
{
    url: "http://www.zansaar.com/furniture/bedroom-furniture/dressing-tables-mirrors?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15
},
{
    url: "http://www.zansaar.com/furniture/bedroom-furniture/beds?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15
},
//not wrking.
//{
//    url: "http://www.zansaar.com/furniture/bedroom-furniture/mattresses?sort=discount",
//    selectors: {
//        elements: 'li[unbxdattr="product"]',
//        title: 'center > img',
//        description: '',
//        imageUrl: 'center > img',
//        actualPrice: 'strong > span',
//        sellingPrice: 'div > p > span',
//        discount: 'div > hgroup > div > span > span',
//        redirectUrl: 'span > a'
//    },
//    isScroll: true,
//    id: 15
//},
{
    url: "http://www.zansaar.com/furniture/bedroom-furniture/wardrobes?sort=discount",
    selectors: {
        elements: 'li[unbxdattr="product"]',
        title: 'center > img',
        description: '',
        imageUrl: 'center > img',
        actualPrice: 'del',
        sellingPrice: 'div > p > span',
        discount: 'div > hgroup > div > span > span',
        redirectUrl: 'span > a'
    },
    isScroll: true,
    id: 15

}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
ZansaarLinks.forEach(function (ZansaarCrawler) {
    casper.thenOpen(ZansaarCrawler.url, function () {
        this.echo("----------------------------------------");
        //if (ZansaarCrawler.isScroll === true) {
        //    this.scrollToBottom();
        //    casper.waitForSelectorTextChange(ZansaarCrawler.selectors.elements, function () { });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(ZansaarCrawler.selectors.elements, function () { });
        //    });
        //    casper.then(function () {
        //        this.scrollToBottom();
        //        casper.waitForSelectorTextChange(ZansaarCrawler.selectors.elements, function () { });
        //    });
        //}
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                //__utils__.echo("elements length is : " + elements.length);

                for (var i = 0; i < elements.length; i++) {
                    //__utils__.echo("this is iteration : " + i);

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
                            "id": stubCrawler.id,
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
            }, ZansaarCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
casper.run();
