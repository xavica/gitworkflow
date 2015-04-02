var casper = require('casper').create();

casper.start('http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=2&bbn=1375458031&ie=UTF8&qid=1426669276', function() {
    if (this.exists('a-size-small a-color-secondary')) {
        this.echo('save exists');
    }
});

casper.run();