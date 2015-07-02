var _ = require('lodash');
var shopCluesLinks = [
// LAPTOPS
{
    url: "http://www.shopclues.com/computers/laptop-special.html?sort_by=hotdeals&sort_order=desc",
    selectors: {
        elements: 'div.products-grid div.grid-product',
        title: 'div.details a.name',
        description: '',
        imageUrl: 'a>img',
        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
        sellingPrice: 'div.product-price > span.price',
        discount: 'div.discount>label',
        redirectUrl: 'div.details a.name'
    },
    isScroll: false,
    id: 1
//},
////Tablets
//{
//    url: "http://www.shopclues.com/mobiles/tablet-en.html?sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 2
//},
////Mobiles
//{
//    url: "http://www.shopclues.com/mobiles/mobile-phones/android-phones.html?sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 3
//},
////Televisions
//{
//    url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=televisions&auto_suggest=0&cid=1781&dispatch=products.search&zettata.bId=control.2015-06-11-03%3A30&zettata.eId=solr407vs410.2015-06-11-03%3A30&sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 5
//},
////Bags
//{
//    url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=luggage+bags+and+suitcase&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-04%3A30&zettata.eId=solr407vs410.2015-06-11-04%3A30&sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 7
//},
////Air Conditioners
//{
//    url: "http://www.shopclues.com/home-applliances/major-appliances/air-conditioners.html?sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 8
//},
////Washing Machines
//{
//    url: "http://www.shopclues.com/home-applliances/major-appliances/washing-machine.html?sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 9
//},
////VideoGames
//{
//    url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=game+consoles&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-10-05%3A30&zettata.eId=solr407vs410.2015-06-10-05%3A30",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 10
//},
////kids and Babies
//{
//    url: "http://www.shopclues.com/kids-and-baby-en/deals-of-the-day-14.html",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 11
//},
////Jewellery
//{
//    url: "http://www.shopclues.com/jewelry-and-watches/temple-jewelry-special.html",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 12
//},
////Books
//{
//    url: "http://www.shopclues.com/books-and-stationery/books-en-2/new-arrivals-and-bestsellers.html?sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 13
//},
////Cameras
//{
//    url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=cameras&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-05%3A00&zettata.eId=solr407vs410.2015-06-11-05%3A00&sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 4
//},
////Furniture
//{
//    url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=furniture&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-07%3A00&zettata.eId=solr407vs410.2015-06-11-07%3A00&sort_by=hotdeals&sort_order=desc",
//    selectors: {
//        elements: 'div.products-grid div.grid-product',
//        title: 'div.details a.name',
//        description: '',
//        imageUrl: 'a>img',
//        actualPrice: 'div.product-price > span.old-price:nth-child(5)',
//        sellingPrice: 'div.product-price > span.price',
//        discount: 'div.discount>label',
//        redirectUrl: 'div.details a.name'
//    },
//    isScroll: false,
//    id: 15
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
shopCluesLinks.forEach(function (shopCluesCrawler) {
    casper.thenOpen(shopCluesCrawler.url, function () {
        this.echo("----------------------------------------");
        if (shopCluesCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(shopCluesCrawler.selectors.elements, function () { });
            //casper.then(function () {
            //    this.scrollToBottom();
            //    casper.waitForSelectorTextChange(shopCluesCrawler.selectors.elements, function () { });
            //});
            //casper.then(function () {
            //    this.scrollToBottom();
            //    casper.waitForSelectorTextChange(shopCluesCrawler.selectors.elements, function () { });
            //});
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
            }, shopCluesCrawler);
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
            StoreName: "ShopClues",
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
        casper.thenOpen('http://web.xavica.local/tdweb/api/productbulk', {
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