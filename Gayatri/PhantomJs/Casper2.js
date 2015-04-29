// 


var casper = require('casper').create();

casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

casper.run();
casper.exit();
