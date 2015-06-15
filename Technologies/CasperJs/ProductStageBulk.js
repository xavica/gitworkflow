

var casper = require('casper').create();
casper.start();

var productArray = [];
productArray.push({
    "CategoryId": "1",
    "ShortDescription": "New Insert",
    "Description": "Description",
    "RedirectUrl": "RedirectUrl",
    "ImageUrl": "ImageUrl",
    "StoreName": "StoreName",
    "ActualPrice": "0.00",
    "CurrentPrice": "0.00",
    "DiscountPercentage": "10.00",
    "IsShippingFree": "0",
    "Star": "0",
    "IsPublished": "0",
    "ShowDate": "2015-05-02",
    "Source": "Source"
});
productArray.push({
    "CategoryId": "1",
    "ShortDescription": "New Insert",
    "Description": "Description",
    "RedirectUrl": "RedirectUrl",
    "ImageUrl": "ImageUrl",
    "StoreName": "StoreName",
    "ActualPrice": "0.00",
    "CurrentPrice": "0.00",
    "DiscountPercentage": "10.00",
    "IsShippingFree": "0",
    "Star": "0",
    "IsPublished": "0",
    "ShowDate": "2015-05-02",
    "Source": "Source"
});

// pushing Flipkart items to ProductStage Table.
casper.then(function () {
    casper.thenOpen('http://localhost:16193/api/productstagebulk', {
        method: 'post',
        data: JSON.stringify(productArray),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    casper.then(function () {
        this.echo("pushed  flipkart items to productstage table");
    });
});
////Getting products from ProductStageTable

casper.run();