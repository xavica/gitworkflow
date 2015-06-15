var cromaRetailLinks = [
// LAPTOPS
{
    url: "http://www.cromaretail.com/Laptops-c-20.aspx#!SO=DISCOUNT",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 1
},
//TABLETS
{
    url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=tablets&x=0&y=0",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 2
},
//MOBILES
{
    url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=mobiles&x=0&y=0",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 3
},
//TELEVISIONS
{
    url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=televisions&x=0&y=0",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 5
},
//AIR CONDITIONERS
{
    url: "http://www.cromaretail.com/Air-Conditioners-c-46.aspx#!SO=DISCOUNT",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 7
},
//WASHING MACHINES
{
    url: "http://www.cromaretail.com/Washing-Machine-c-48.aspx#!SO=DISCOUNT",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 8
},
//CAMERAS
{
    url: "http://www.cromaretail.com/Digital-Cameras-c-14.aspx#!SO=DISCOUNT",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 4
},
//TELEVISIONS
{
    url: "http://www.cromaretail.com/LED-TVs-c-34.aspx#!&SO=DISCOUNT",
    selectors: {
        elements: '.gBox article',
        title: 'a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'h4.strike',
        sellingPrice: 'h3',
        discount: 'span.youSave',
        redirectUrl: 'a'
    },
    isScroll: false,
    id: 5

}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
cromaRetailLinks.forEach(function (cromaRetailCrawler) {
    casper.thenOpen(cromaRetailCrawler.url, function () {
        this.echo("----------------------------------------");
        if (cromaRetailCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(cromaRetailCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(cromaRetailCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(cromaRetailCrawler.selectors.elements, function () { });
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
                    //Here in image url a change has been done 
                    imageUrl = "http://www.cromaretail.com" + imageUrl;

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
            }, cromaRetailCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
casper.run();