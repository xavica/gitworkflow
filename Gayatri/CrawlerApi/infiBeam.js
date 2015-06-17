var _ = require('lodash');
var infiBeamLinks = [
// MOBILES
{
    url: "http://www.infibeam.com/Hot_Deals/search?keybn=home_elec_mobi_mobi",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 3
},
//Televisions 
{
    url: "http://www.infibeam.com/led-tv/search?tvscreensize=24-inches-below",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},
//Televisions
{
    url: "http://www.infibeam.com/led-tv/search?tvscreensize=32%20Inches",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},

{
    url: "http://www.infibeam.com/led-tv/search?tvscreensize=50-inches-above",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},
{
    url: "http://www.infibeam.com/led-tv/search?features=hdmi",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},
{
    url: "http://www.infibeam.com/hd-tv",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},
{
    url: "http://www.infibeam.com/3d-tv",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 5
},
//Sun Glasses
{
    url: "http://www.infibeam.com/Eyewear/search?q=hot+deals+in+men+sunglasses",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 6
},
{
    url: "http://www.infibeam.com/sunglasses/",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 6
//},
////Watches
//{
//    url: "http://www.infibeam.com/mens-watches/search?q=watches%20for%20men%20deals",
//    selectors: {
//        elements: 'div.resultsrow div.search-icon',
//        title: 'div.title > a',
//        description: '',
//        imageUrl: 'div.product-img > a > picture > img',
//        actualPrice: 'div.price> span.scratch',
//        sellingPrice: 'div.price > span.final-price',
//        discount: 'div.price > span.discount',
//        redirectUrl: 'div.title > a'
//    },
//    isScroll: false,
//    id: 6
//},
////Accesories
//{
//    url: "http://www.infibeam.com/Travel_Accessories/search?q=luggage%20and%20suitcase",
//    selectors: {
//        elements: 'div.resultsrow div.search-icon',
//        title: 'div.title > a',
//        description: '',
//        imageUrl: 'div.product-img > a > picture > img',
//        actualPrice: 'div.price> span.scratch',
//        sellingPrice: 'div.price > span.final-price',
//        discount: 'div.price > span.discount',
//        redirectUrl: 'div.title > a'
//    },
//    isScroll: false,
//    id: 7
//},
////Air conditioners
//{
//    url: "http://www.infibeam.com/split-ac#capacity=1-1-1-4-ton&capacity=1-5-ton&capacity=1-6-ton-and-above&capacity=1-ton&capacity=below-1-ton&starRating=2-star&starRating=3-star&starRating=4-star&starRating=5-star&sort=relevance",
//    selectors: {
//        elements: 'div.resultsrow div.search-icon',
//        title: 'div.title > a',
//        description: '',
//        imageUrl: 'div.product-img > a > picture > img',
//        actualPrice: 'div.price> span.scratch',
//        sellingPrice: 'div.price > span.final-price',
//        discount: 'div.price > span.discount',
//        redirectUrl: 'div.title > a'
//    },
//    isScroll: false,
//    id: 8
//},
/////games
//{
//    url: "http://www.infibeam.com/gaming-consoles-handheld/search#nothing",
//    selectors: {
//        elements: 'div.resultsrow div.search-icon',
//        title: 'div.title > a',
//        description: '',
//        imageUrl: 'div.product-img > a > picture > img',
//        actualPrice: 'div.price> span.scratch',
//        sellingPrice: 'div.price > span.final-price',
//        discount: 'div.price > span.discount',
//        redirectUrl: 'div.title > a'
//    },
//    isScroll: false,
//    id: 10

}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
infiBeamLinks.forEach(function (infiBeamCrawler) {
    casper.thenOpen(infiBeamCrawler.url, function () {
        this.echo("----------------------------------------");
        if (infiBeamCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(infiBeamCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(infiBeamCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(infiBeamCrawler.selectors.elements, function () { });
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
                    //Here a change has been done to the attribute of imageUrl
                    var imageUrl = imageUrlElement && imageUrlElement.getAttribute('srcset') || '';

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
            }, infiBeamCrawler);
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
            Description: item.title,
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "InfiBeam",
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