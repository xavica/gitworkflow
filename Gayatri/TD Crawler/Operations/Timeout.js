var casper = require('casper').create();
casper.start();
var url = "http://www.bagittoday.com/budget-laptops/c-2443/"
casper.thenOpen(url, function () {
    this.echo("url opened");
});
casper.run();