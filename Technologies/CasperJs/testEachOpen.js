
var fs = require('fs');
var casper = require('casper').create();
casper.start();
casper.echo(fs);

function append(file, content, callback) {
    if (fs.appendFile) {
        fs.appendFile(file, content, callback);
    } else {
        fs.write(file, content, 'a');
        callback();
    }
}

// pushing Flipkart items to ProductStage Table.
casper.then(function () {
    var items = ['www.google.com', 'www.amazon.com', 'www.murthy.com', 'www.deals2buy.com'];
    items.forEach(function (url) {
        casper.thenOpen(url, {}, function () {
            console.log(url + ' opened');
            append("logs/06-30-2015.txt", url + ' opened \n', function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

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