var casper = require('casper').create();
casper.waitFor(function check() {
    return casper.open('http://google.com/');
}, function then() {
    \\ executed after receiving response from page
    this.echo(this.page.title);
});