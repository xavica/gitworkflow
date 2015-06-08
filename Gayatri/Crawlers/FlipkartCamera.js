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
casper.start('http://www.flipkart.com/search?q=camera&as=on&as-show=on&otracker=start&as-pos=1_q_camera#jumpTo=600|20');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        $('div[data-pid*="CAM"]').each(function () {
            var title = $(this).find('.pu-title').text();
            title = title.replace(/(\r\n|\n|\r)/gm, "");
            title = title.replace(/\s+/g, " ");
            var actualPrice = $(this).find('div.pu-final > span').text();
            // var discountPrice = $(this).find('div.pu-final > span').text();
            var description = 'Desc Text';
            var imageUrl = 'http://google.com/';
            var redirectUrl = "http://w3schools.com";
            // var discount = '5';
            __utils__.echo(title);
            __utils__.echo(actualPrice);

            tempProducts.push({
                "title": title,
                "actualPrice": actualPrice,
                // "discountPrice": discountPrice,
                "description": description,
                "redirectUrl": redirectUrl,
                // "discount": discount
            });
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