function Product(title, description, imageUrl, actualPrice, discountPrice, discount, redirectUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.actualPrice = actualPrice;
    this.discountPrice = discountPrice;
    this.discount = discount;
    this.redirectUrl = redirectUrl;

}
var productsList = [];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start('http://deals.ebay.in/ebaydeals/cameras-2');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        $("#dataTable").each(function () {
            var title = $(this).find('div.itemtitle > p > a').text();
            title = title.replace(/(\r\n|\n|\r)/gm, "");
            title = title.replace(/\s+/g, " ");
            var actualPrice = $(this).find('div.itemPriceStriked > p').text();
            var discountPrice = $(this).find('div.itemPrice > p').text();
            // var description = 'Desc Text';
            // var imageUrl = 'http://google.com/';
            // var redirectUrl = "http://w3schools.com";
            var discount = $(this).find('div.discountLabel > div > span').text().replace(/[^0-9]/g, '');
            __utils__.echo(title + "\n");
            __utils__.echo(actualPrice);
            __utils__.echo(discountPrice);
            __utils__.echo(discount + ',');
                  tempProducts.push({
                        "title": title,
                        "actualPrice": actualPrice,
                        "discountPrice": discountPrice,
                        // "description": description,
                        // "redirectUrl": redirectUrl,
                        "discount": discount
            });
        });
        __utils__.echo(tempProducts.length);
        return tempProducts;
    });
    // this.echo("evaluation end");
    // this.echo(productsList.length);
    // this.echo(productsList);

})

casper.run();
//setTimeout(function () {
//    phantom.exit();
//}, 0);
