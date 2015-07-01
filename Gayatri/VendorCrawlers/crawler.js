/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, crawler, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var crawler = require('./xa-crawlerUtil.js'),
fs = require('fs'),
starString = "**********************************************************************",
starStringWithNewLine = "**********************************************************************\r\n",
d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('-'),
    casper = require('casper').create(),
    productsList = [],
    vendors = [
        ////require('./Amazon.js').getVendor(), //need to fix title 
        require('./BagItToday.js').getVendor(),
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

               //require('./Zansaar.js').getVendor(), // extracted but not pushed into productstage.
               //require('./FabFurnish.js').getVendor(), //extracted 1042, not pushed
               // require('./Evok.js').getVendor(),
               //require('./PepperFry.js').getVendor(),

    ];

casper.start();
function append(file, content, callback) {
    if (fs.appendFile) {
        fs.appendFile(file, content, callback);
    } else {
        fs.write(file, content, 'a');
        callback();
    }
}

vendors.forEach(function (vendor) {
    //parse the urls.
    if (vendor) {
        casper.then(function () {
            productsList = crawler.parseUrls(vendor.links, casper);
        });
        casper.then(function () {
            if (productsList) {
                casper.echo("Total Products Extracted From  " + vendor.storeName + "  Are:: " + productsList.length);
                crawler.logAppend(starStringWithNewLine);
                crawler.logAppend("Total Products Extracted From  " + vendor.storeName + "  Are:: " + productsList.length + "\r\n");

                // pushing items to ProductStage Table.
                crawler.defaultPushToStage(productsList, vendor.storeName, casper);
            }
        });
    }
});

casper.on("selector.changed", function (vendorLink) {
    this.echo("From Emit Method ==>> Some Selector Has Been Changed for URL :: " + vendorLink.url);
    crawler.logString += starStringWithNewLine;
    crawler.logAppend("From Emit Method ==>> Some Selector Has Been Changed for URL :: " + vendorLink.url + "\r\n");
});
casper.on('url.failed', function (vendorLink) {
    this.echo("From Emit Method ==>> URL Not Working :: " + vendorLink.url);
    crawler.logAppend("From Emit Method ==>> URL Not Working :: " + vendorLink.url + "\r\n");

});

casper.then(function () {
    casper.echo('Finished Processing All Vendors');
    crawler.logAppend("Finished Processing All Vendors\r\n");
    crawler.logAppend(starStringWithNewLine);
});
casper.then(function () {
    //console.log("logstring is :: " + crawler.logString);
    var fileName = "logs/" + dformat + "_crawler.txt";
    append(fileName, crawler.logString, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    setTimeout(function () {
        console.log(i);
    }, Math.floor((Math.random() * 500) + 1000));
});

casper.run(function () {
    casper.exit();
});