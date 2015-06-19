var BajaaoLinks = [
    //Musical Instruments
{
    url: "http://www.bajaao.com/collections/special-deals",
    selectors: {
        elements: 'div[class*="three columns"]',
        title: 'div > a',
        description: '',
        imageUrl: 'a > div > img',
        actualPrice: 'span.price > span.was_price',
        sellingPrice: 'span.price > collection_price',
        discount: '',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/special-deals?page=2",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/guitar-deals?sort_by=price-ascending",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/guitar-deals?page=2&sort_by=price-ascending",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/drum-deals",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/drum-deals?page=2",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/keyboard-deals",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
//},
//{
//    url: "http://www.bajaao.com/collections/keyboard-deals?page=2",
//    selectors: {
//        elements: 'div[class*="three columns"]',
//        title: 'div > a',
//        description: '',
//        imageUrl: 'a > div > img',
//        actualPrice: 'span.price.sale > span.was_price',
//        sellingPrice: 'a > div > span > span',
//        discount: '',
//        redirectUrl: 'div > a'
//    },
//    isScroll: false,
//    id: 15
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
BajaaoLinks.forEach(function (BajaaoCrawler) {
    casper.thenOpen(BajaaoCrawler.url, function () {
        this.echo("----------------------------------------");
        if (BajaaoCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(BajaaoCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(BajaaoCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(BajaaoCrawler.selectors.elements, function () { });
            });
        }
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
                    //var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    // No explicit discount. code Changed here
                    var discountElement = +actualPrice - +sellingPrice;
                    var discount = (discountElement / actualPrice) * 100;
                 
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
                    if (title && actualPrice && redirectUrl) {
                        __utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        __utils__.echo(actualprice);
                        __utils__.echo(sellingprice);
                        ////__utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        __utils__.echo("-----------------------------------");

                        tempProducts.push({
                            "id": stubCrawler.id,
                            "title": title,
                            "actualPrice": actualPrice,
                            "sellingPrice": sellingPrice,
                            //"discount": discount,
                            "redirectUrl": fullRedirectUrl,
                            "imageUrl": imageUrl
                        });
                    }
                }
                return tempProducts;
            }, BajaaoCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing items to ProductStage Table.
casper.then(function () {
    //Creating proper input array.
    var productListToPush = productsList.map(function (item) {
        return {

            CategoryId: item.id,
            ShortDescription: item.title,
            Description: "Description",
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "Flipkart",
            ActualPrice: item.actualPrice,
            CurrentPrice: item.sellingPrice,
            DiscountPercentage: item.discount,
            IsShippingFree: 1,
            Star: 4,
            IsPublished: 0,
            ShowDate: "1/1/2015",
            Source: "Crawler",
            CreatedDate: "1/1/2015",
            LastUpdateDate: "1/1/2015"
        }
    });
    this.echo("productListToPush  :  " + productListToPush.length);
    var batchSize = 5;
    var pushingArray = [];
    pushingArray = _.chunk(productListToPush, batchSize);
    this.echo(pushingArray.length);

    pushingArray.forEach(function (batchArray) {
        casper.thenOpen('http://localhost:16193/api/productstagebulk', {
            method: 'post',
            data: JSON.stringify(batchArray),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    });
    this.echo("pushed items to productstage table");
});
casper.run();
