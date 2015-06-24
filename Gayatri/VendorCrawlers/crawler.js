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

               //-----------No explicit Discount --------------------

              //require('./BookAdda.js').getVendor(),  // explict Discount
              //require('./Evok.js').getVendor(), // Explicit Discount
              //require('./RajMusical.js').getVendor(), // Explicit Discount
              //require('./Saholic.js').getVendor(), // Explicit Discount
              //require('./SbMusic.js').getVendor(), // Explicit Discount
              //require('./HomeShop18.js').getVendor(), // Explicit Discount
              //require('./TvDeals.js').getVendor(), // Explicit Discount
              //require('./Bajaao.js').getVendor(), // Explicit Discount

              //-------------No discount n no title property---------------------

                 //require('./GadgetsGuru.js').getVendor(),

             //---------------------No title ----------------------

                //require('./Ebay.js').getVendor(), //no title property
                //require('./GreenDust.js').getVendor(), // no explicit title property
               //require('./PepperFry.js').getVendor(), //no title property
               //require('./Jabbong.js').getVendor(), //no title property

               //---------------------Not pushing into productstage table -----------------------

               //require('./Zansaar.js').getVendor() // extracted but not pushed into productstage.
               //require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
               //require('./GiftEase.js').getVendor(), // not pushing products
               
               // Not able to find selectors -- Snapdeal

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