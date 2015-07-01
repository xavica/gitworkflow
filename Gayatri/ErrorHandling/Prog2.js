var casper = require('casper').create();

// listening to a custom event
casper.on('tvdeal.loaded', function() {
    this.echo('tvdeal page element not present');
});

casper.start('http://www.tvdeal.in/Regular-LED-Televisions', function() {
    // emitting a custom event
    if(!this.exists('div[class*="three111"]')){
    this.emit('tvdeal.loaded');

    }
});

casper.run();