var casper = require('casper').create();


casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});
console.log("Gayatri");
casper.run();



// console.log("hello");
// phantom.exit();