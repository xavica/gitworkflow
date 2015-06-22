/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var crawler = require('./xa-crawlerUtil.js'),
    casper = require('casper').create(),
    productsList = [],
    vendors = [
        //require('./Amazon.js').getVendor(),
        //require('./BabyOye.js').getVendor(),   // giving error not found 
        //require('./BagItToday.js').getVendor(),
        //require('./BookAdda.js').getVendor(),  // not retreiving products
        //require('./CashKaro.js').getVendor(), // leaving few items in push(41,27, leaving 14)
        //require('./CraftsVilla.js').getVendor(), // not printing titles
        //require('./CromaRetail.js').getVendor(), //leaving few prduts to push(92,87,5)
        //require('./DusKya.js').getVendor(),
        //require('./Evok.js').getVendor(), // not retreiving products
         //require('./EzoneOnline.js').getVendor(), // frequent scroll timeout
         //require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
         //require('./FashionAndyou.js').getVendor(),
         //require('./FashionEra.js').getVendor(),
         //require('./FirstCry.js').getVendor(), //taking time to execute
          //require('./Flipkart.js').getVendor(), //frequent timeout error
            //require('./GiftEase.js').getVendor(), // not retreiving products
            //require('./GreenDust.js').getVendor(), // not retreiving products
            //require('./HomeShop18.js').getVendor() // not retreiving products
            //require('./IndiaTimes.js').getVendor(),
             //require('./InfiBeam.js').getVendor() //last 2 links not working.
             //require('./InLiving.js').getVendor(),
               //require('./Mirraw.js').getVendor(),
               //require('./PepperFry.js').getVendor(), // not retreiving products
               //require('./RajMusical.js').getVendor(), // not retreiving products
               //require('./Saholic.js').getVendor(), // not retreiving products
               //require('./SbMusic.js').getVendor(), // not retreiving products
               //require('./ShopClues.js').getVendor(),  // few links not working
               require('./TvDeals.js').getVendor(), // not retreiving products, discount explicit calc
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