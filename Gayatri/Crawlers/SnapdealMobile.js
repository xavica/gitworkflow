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
casper.start('http://www.snapdeal.com/products/mobiles-tablets?q=Price%3A2331%2C63299&sort=plrty');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        $('.productWrapper').each(function () {

            var title = $(this).find('div.hoverProductWrapper.product-txtWrapper > div.product-title > a').text();
            title = title.replace(/(\r\n|\n|\r)/gm, "");
            title = title.replace(/\s+/g, " ");
            var actualPrice = $(this).find('span > strike').text();
            var discountPrice = $(this).find('#prodDetails > div.product-price > div:nth-child(1)').text();
            // var description = 'Desc Text';
            // var imageUrl = 'http://google.com/';
            // var redirectUrl = "http://w3schools.com";
            var discount = $(this).find('span > s').text().replace(/[^0-9]/gi, '');
            // __utils__.echo(title);
            // __utils__.echo(actualPrice);

            // tempProducts.push({
            //     "title": title,
            //     "actualPrice": actualPrice,
            //     "discountPrice": discountPrice,
            //     "description": description,
            //     "redirectUrl": redirectUrl,
            //     "discount": discount
            // });
        
        });
        __utils__.echo(tempProducts.length);
        return tempProducts;
    });
    this.echo("evaluation end");
    this.echo(productsList.length);
})


casper.run();
//setTimeout(function () {
//    phantom.exit();
//}, 0);