
var HomeShopLinks = [
// LapTops
{
    url: "http://www.homeshop18.com/laptops/categoryid:3291/search:laptops/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 1
},
// Tablets
{
    url: "http://www.homeshop18.com/tablets/categoryid:3254/search:tablets/?it_category=hs18bot&it_action=multiCategory&it_label=tablets&it_value=1",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 2
},
// Telivisions
{
    url: "http://www.homeshop18.com/televisions/categoryid:3203/search:televisions/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 5
},
// Luggages & Bags
{
    url: "http://www.homeshop18.com/trolley-bags-26-suitcases/category:17337/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 7
},
//Air Conditioners
{
    url: "http://www.homeshop18.com/air-conditioners/category:4259/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 8
},
// Washing Machines
{
    url: "http://www.homeshop18.com/washing-machines-26-dryers/category:3592/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 9
},
// Games & Consoles
{
    url: "http://www.homeshop18.com/games-consoles/categoryid:3203/search:games+%26+consoles/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 10
},
// Toys  & Kids
{
    url: "http://www.homeshop18.com/toys-kids/categoryid:3335/search:toys+%26+kids/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 11
},
// fashion Jewellery
{
    url: "http://www.homeshop18.com/fashion-jewellery/category:15143/inStock:true/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 12
},
//Musical Instruments Kids Games
{
    url: "http://www.homeshop18.com/musical-instruments/categoryid:3335/search:musical+instruments/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 11
},
// Cameras
{
    url: "http://www.homeshop18.com/cameras/categoryid:3188/search:cameras/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 4
},
// Cameras
{
    url: "http://www.homeshop18.com/cameras/categoryid:16523/search:cameras/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 4
},
//Furniture
{
    url: "http://www.homeshop18.com/furniture/category:15213/sort:Discounts/",
    selectors: {
        elements: '.grid-view .box.product_div .inside',
        title: 'p.product_title > a',
        description: '',
        imageUrl: 'p.product_image > a > img',
        actualPrice: 'p.price.clearfix > em',
        sellingPrice: 'p.price.clearfix > b',
        discount: '',
        redirectUrl: 'p.product_image > a'
    },
    isScroll: false,
    id: 15
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
HomeShopLinks.forEach(function (HomeShopCrawler) {
    casper.thenOpen(HomeShopCrawler.url, function () {
        this.echo("----------------------------------------");
        if (HomeShopCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(HomeShopCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(HomeShopCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(HomeShopCrawler.selectors.elements, function () { });
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
                    // var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
                    title = title.replace('Buy ', '') || title;
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
            }, HomeShopCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing HomeShop18 items to ProductStage Table.
casper.then(function () {
    this.echo(productsList.length);
    productsList.forEach(function (item) {
        casper.thenOpen('http://localhost:16193/api/productstage', {
            method: 'post',
            data: {
                CategoryId: item.id,
                ShortDescription: item.title,
                Description: "Description",
                RedirectUrl: item.redirectUrl,
                ImageUrl: item.imageUrl,
                StoreName: "HomeShop18",
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

    });
    this.echo("pushed  HomeShop18 items to productstage table");
});
////Getting products from ProductStageTable

casper.run();