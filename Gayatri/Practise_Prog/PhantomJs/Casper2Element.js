var casper = require('casper').create();

casper.start("http://http://www.flipkart.com/mobiles?otracker=nmenu_sub_electronics_0_Mobiles/", function() {
    if (this.exists('fk-mainbody-id > div > div.landing-vd.newvd > div:nth-child(2) > div:nth-child(1) > div.gd-col.gu12.browse-decide > div:nth-child(10) > div > div > div:nth-child(2) > div > div.pu-details.lastUnit > div.pu-price > div.pu-discount.fk-font-11 > span')) {
        this.echo('the css path worked');
    }
});

// casper.then('http://domain.tld/page.html', function() {
//     if (this.exists('a.fk-display-block')) {
//         this.echo('the heading for the product exists');
//     }
// });
// casper.then(function()
// {
// 	casper.exit();
// })

casper.run();