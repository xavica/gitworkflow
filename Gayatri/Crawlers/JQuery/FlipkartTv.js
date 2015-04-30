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
casper.start('http://www.flipkart.com/home-entertainment/televisions/pr?p%5b%5d=sort=featured&sid=ckf,czl&otracker=ch_vn_television_filter_Brands_See%20All%20TVs');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        $('div[data-pid*="TVS"]').each(function () {
            var title = $(this).find('.pu-title').text();
            title = title.replace(/(\r\n|\n|\r)/gm, "");
            title = title.replace(/\s+/g, " ");
            var actualPrice = $(this).find('.pu-old').text();
            var discountPrice = $(this).find('div.pu-final > span').text();
            var description = 'Desc Text';
            var imageUrl = 'http://google.com/';
            var redirectUrl = "http://w3schools.com";
            var discount = $(this).find('div.pu-price > div.pu-discount.fk-font-11 > span.pu-off-per').text().replace(/[^0-9]/gi, '');
            __utils__.echo(title);
            __utils__.echo(discount);

            tempProducts.push({
                "title": title,
                "actualPrice": actualPrice,
                "discountPrice": discountPrice,
                "description": description,
                "redirectUrl": redirectUrl,
                "discount": discount
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