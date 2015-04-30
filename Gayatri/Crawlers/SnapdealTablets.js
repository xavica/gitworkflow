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
casper.waitFor(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[categoryid="133"]');
        for (i = 0; i < elements.length; i++) {

            var titleElement = elements[i].querySelector('div.outerImg > div > a > img');
            var priceElement = elements[i].querySelector('#prodDetails > div.product-price > div:nth-child(1)');


            var title = titleElement && titleElement.getAttribute("title") || '';
            var price = priceElement.textContent.trim() || 0;
            var actualPrice = (price.substring(price.indexOf("Rs") + 2, price.lastIndexOf("Rs"))).trim() || 0;
            var discountPrice = (price.substring(price.lastIndexOf("Rs") + 2, price.indexOf("("))).trim() || 0;
            var discount = price.substring(price.indexOf('(') + 1, price.indexOf('(') + 3).replace(/[^0-9]/g, '').trim() || 0;
            
            __utils__.echo("begin");
            __utils__.echo(title);
            __utils__.echo(actualPrice);
            __utils__.echo(discountPrice);
            __utils__.echo(discount);
            __utils__.echo("end");
            __utils__.echo(i);

            tempProducts.push({
                "title": title,
                "actualPrice": actualPrice,
                "discountPrice": discountPrice,
                // "description": description,
                // "redirectUrl": redirectUrl,
                "discount": discount
            });

        }
        __utils__.echo(tempProducts.length);
        return tempProducts;
    });
    this.echo("evaluation end");
    this.echo(productsList.length);
});


casper.run();
