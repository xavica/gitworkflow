var TabletLinks = [{
    url: "http://deals.ebay.in/ebaydeals/tablets-6",
    selectors: {
        elements: '.listingblock',
        title: '',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'div.itemPriceStriked > p',
        sellingPrice: 'div.itemPrice > p',
        discount: 'div.imgListingContainer > a > img',
        redirectUrl: 'div.imgListingContainer > a'
    },
    isScroll: true
}];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.options.waitTimeout = 10000;
casper.start();
var productsList = [];
TabletLinks.forEach(function (tabletCrawler) {
    casper.thenOpen(tabletCrawler.url, function () {
        this.echo("---------------------");
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                for (var i = 0; i < elements.length; i++) {
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                    __utils__.echo(imageUrl);
                    tempProducts.push({
                        "title": title
                    });
                }
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
casper.run();