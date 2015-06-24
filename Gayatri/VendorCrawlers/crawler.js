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
        //require('./BookAdda.js').getVendor(),  // not retreiving products
        //require('./CashKaro.js').getVendor(), 
        //require('./CraftsVilla.js').getVendor(),
        //require('./CromaRetail.js').getVendor(), 
        //require('./DusKya.js').getVendor(),
        //require('./Evok.js').getVendor(), // Explicit Discount
         //require('./EzoneOnline.js').getVendor(), 
         //require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
         //require('./FashionAndyou.js').getVendor(),
         //require('./FashionEra.js').getVendor(),
         //require('./FirstCry.js').getVendor(), 
          //require('./Flipkart.js').getVendor(), 
            //require('./GiftEase.js').getVendor(), // not pushing products
            //require('./GreenDust.js').getVendor(), // no explicit title property
            //require('./HomeShop18.js').getVendor() // Explicit Discount
            //require('./IndiaTimes.js').getVendor(),
             //require('./InfiBeam.js').getVendor() //last 2 links not working.
             //require('./InLiving.js').getVendor(),
               //require('./Mirraw.js').getVendor(),
               //require('./PepperFry.js').getVendor(), //no title property
               //require('./RajMusical.js').getVendor(), // Explicit Discount
               //require('./Saholic.js').getVendor(), // Explicit Discount
               //require('./SbMusic.js').getVendor(), // Explicit Discount
               //require('./ShopClues.js').getVendor(),  // few links not working
               //require('./TvDeals.js').getVendor(), // Explicit Discount
               //require('./Zansaar.js').getVendor() // extracted but not pushed into productstage.
               // ebay, snapdeal, jabong, bajaao, gazetguru, 

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