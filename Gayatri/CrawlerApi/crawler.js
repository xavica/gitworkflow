/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var crawler = require('./xa-crawlerUtil.js'),
    casper = require('casper').create(),
    productsList = [],
    vendors = [
        require('./amazonurls.js').getVendor(),
        //require('./bagItTodayurls.js').getVendor()
    ];

casper.start();

vendors.forEach(function (vendor) {
    //parse the urls.
    if (vendor) {
        casper.then(function () {
            productsList = crawler.parseUrls(vendor.links, casper);
        });
        casper.then(function () {
            if (productsList) {
                casper.echo('Vendor Name' + vendor.storeName + ", Total Products List:" + productsList.length);
                // pushing items to ProductStage Table.
                crawler.defaultPushToStage(productsList, vendor.storeName, casper);
            }
        });
    }
});

casper.then(function () {
    casper.echo('Finished all the vendors.');
});


casper.run();