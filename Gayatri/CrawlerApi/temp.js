var _ = require('lodash');
var TvDealsLinks = [
//Telivisions 
{
    url: "http://www.tvdeal.in/Regular-LED-Televisions",
    selectors: {
        elements: 'div[class*="three"]',
        title: 'div.image > a > img',
        description: '',
        imageUrl: 'div.image > a > img',
        actualPrice: 'div.price > span.price-old',
        sellingPrice: 'div.price > span.price-new',
        discount: '',
        redirectUrl: 'div.image'
    },
    isScroll: false,
    id: 5
}];


var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];

TvDealsLinks.forEach(function (TvDealsCrawler) {
    casper.thenOpen(TvDealsCrawler.url, function () {
        if (!this.exists(TvDealsCrawler.selectors.elements) ||
                !this.exists(TvDealsCrawler.selectors.title) ||
                !this.exists(TvDealsCrawler.selectors.actualPrice) ||
                !this.exists(TvDealsCrawler.selectors.sellingPrice) ||
                !this.exists(TvDealsCrawler.selectors.redirectUrl) ||
                !this.exists(TvDealsCrawler.selectors.imageUrl)) {
            this.emit('selector.changed');
        }
        this.echo("----------------------------------------");
        if (TvDealsCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(TvDealsCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(TvDealsCrawler.selectors.elements, function () { });
            });
        }
        var parsedItems = casper.evaluate(function (stubCrawler) {
            
            return "hello";
        }, TvDealsCrawler);
        if (parsedItems) {
            for (var i = 0; i < parsedItems.length; i++) {
                productsList.push(parsedItems[i]);
            }
        }
    });
    casper.on('selector.changed', function () {
        this.echo("from emit method");
    });
});

casper.run();