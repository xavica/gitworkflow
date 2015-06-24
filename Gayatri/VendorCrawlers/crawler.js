/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var crawler = require('./xa-crawlerUtil.js'),
    casper = require('casper').create(),
    productsList = [],
    vendors = [
        //require('./Amazon.js').getVendor(),
        //require('./BabyOye.js').getVendor(),
        //require('./BagItToday.js').getVendor(),
        //require('./CashKaro.js').getVendor(),
        //require('./CraftsVilla.js').getVendor(),
        //require('./CromaRetail.js').getVendor(),
        //require('./DusKya.js').getVendor(),
        //require('./EzoneOnline.js').getVendor(),
        //require('./FashionAndyou.js').getVendor(),
        //require('./FashionEra.js').getVendor(),
        //require('./FirstCry.js').getVendor(),
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
        //require('./Bajaao.js').getVendor(), 
        //require('./GadgetsGuru.js').getVendor(),
        //require('./Ebay.js').getVendor(),
        //require('./GreenDust.js').getVendor(), 

                        //---------------------No title ----------------------
               require('./Jabbong.js').getVendor(), //not executing even all selector are correct

               //---------------------Not pushing into productstage table -----------------------

               //require('./Zansaar.js').getVendor() // extracted but not pushed into productstage.
               //require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
               //require('./GiftEase.js').getVendor(), // not pushing products
                //require('./Evok.js').getVendor(), 
               //require('./PepperFry.js').getVendor(),

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