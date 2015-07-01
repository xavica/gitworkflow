/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var crawler = require('./xa-crawlerUtil.js'),
    casper = require('casper').create(),
    productsList = [],
    vendors = [
        ////require('./Amazon.js').getVendor(), //need to fix title 
        //require('./BagItToday.js').getVendor(),
        //require('./CashKaro.js').getVendor(),
        //require('./CraftsVilla.js').getVendor(),
        //require('./CromaRetail.js').getVendor(),
        //require('./EzoneOnline.js').getVendor(),
        //require('./FashionEra.js').getVendor(),
        //require('./Flipkart.js').getVendor(),
        //require('./IndiaTimes.js').getVendor(),
        //require('./InfiBeam.js').getVendor(),
        //require('./InLiving.js').getVendor(),
        //require('./Mirraw.js').getVendor(),
        //require('./ShopClues.js').getVendor(),
        //require('./RajMusical.js').getVendor(), 
        //require('./BookAdda.js').getVendor(),  
        //require('./Saholic.js').getVendor(), 
        //require('./SbMusic.js').getVendor(), 
        //require('./HomeShop18.js').getVendor(), 
        //require('./TvDeals.js').getVendor(), 
        // require('./GreenDust.js').getVendor(), 
        //require('./Bajaao.js').getVendor(),
        //require('./GadgetsGuru.js').getVendor(),
       //require('./FirstCry.js').getVendor(),
         //require('./GiftEase.js').getVendor(), 
        //require('./Ebay.js').getVendor(),

       //require('./Jabbong.js').getVendor(), 
      //require('./FashionAndyou.js').getVendor(),
      //  require('./BabyOye.js').getVendor(),

               //---------------------Not pushing into productstage table -----------------------

               require('./Zansaar.js').getVendor(), // extracted but not pushed into productstage.
               require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
                require('./Evok.js').getVendor(), 
               require('./PepperFry.js').getVendor(),

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
                //casper.echo('Vendor Name' + vendor.storeName + ", Total Products List:" + productsList.length);
                casper.echo("Total Products Extracted From  " + vendor.storeName + "  Are:: " + productsList.length);
                // pushing items to ProductStage Table.
                crawler.defaultPushToStage(productsList, vendor.storeName, casper);
            }
        });
    }
});

casper.on("selector.changed", function (vendorLink) {
    this.echo("From Emit Method ==>> Some Selector Has Been Changed ");
    this.echo("------------------------------------------------");
    this.echo(vendorLink.url);
    this.echo("___________________________________________");
});
casper.on('url.failed', function (vendorLink) {
    this.echo("From Emit Method ==>> URL Not Working ");
    this.echo("-----------------------------------------------");
    this.echo(vendorLink.url);
    this.echo("___________________________________________");
});

casper.then(function () {
    casper.echo('Finished Processing All Vendors');
});

casper.run(function () {
    casper.exit();
});