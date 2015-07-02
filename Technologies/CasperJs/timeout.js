var casper = require('casper').create();
casper.start();
casper.thenOpen("http://www.bagittoday.com/budget-laptops/c-2443/", function () {
    this.echo("hello");
});
casper.run();