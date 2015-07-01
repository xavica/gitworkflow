

var casper = require('casper').create();
casper.start();


// pushing Flipkart items to ProductStage Table.
casper.then(function () {
    var items = ['www.google.com', 'www.amazon.com', 'www.murthy.com', 'www.deals2buy.com'];
    items.forEach(function (url) {
        casper.thenOpen(url, {}, function () {
            console.log(url + ' opened');
            setTimeout(function () { 
                console.log(i);
            }, Math.floor((Math.random() * 500) + 1000));
        });
        casper.then(function () {
            console.log(url + 'opened and after');
        });
    });
    casper.then(function () {
        casper.echo('outside all links');
        casper.exit();
    });
});
////Getting products from ProductStageTable

casper.run();