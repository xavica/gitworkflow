var _ = require('lodash');
var EvokLinks = [
// Sofaes
{
    url: "http://www.evok.in/furniture/living-room/sofas-and-sets.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
// side-Tables
{
    url: "http://www.evok.in/furniture/living-room/center-side-tables.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
//furniture Tables
{
    url: "http://www.evok.in/furniture/living-room/consoles-cabinets.html?dir=asc&limit=12&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/dining-room.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/living-room/entertainment-units.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/dining-room/dining-table-sets.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/dining-room/dining-tables.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/dining-room/dining-benches-chairs.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/dining-room/bar.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/furniture/bed-room.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15

},
{
    url: "http://www.evok.in/furniture/study-room.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
{
    url: "http://www.evok.in/sale.html?dir=asc&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
EvokLinks.forEach(function (EvokCrawler) {
    casper.thenOpen(EvokCrawler.url, function () {
        this.echo("----------------------------------------");
        if (EvokCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(EvokCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(EvokCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(EvokCrawler.selectors.elements, function () { });
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
                    //var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;

                    var discount = Math.floor(((actualPrice - sellingPrice) * 100) / actualPrice) + 1;
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
                        __utils__.echo(discount);
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
            }, EvokCrawler);
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