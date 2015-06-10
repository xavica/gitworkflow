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
        var elements = document.querySelectorAll('.listingblock');
         for (i = 0; i < elements.length; i++) {
            var titleElement = elements[i].querySelector('div.itemtitle > p > a')
            var actualPriceElement = elements[i].querySelector('div.itemPriceStriked > p');
            var discountPriceElement = elements[i].querySelector('div.itemPrice > p');
            var discountElement = elements[i].querySelector('div.discountLabel > div > span');

            var title = titleElement && titleElement.innerText.trim() || '';
            var actualPrice = actualPriceElement && actualPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var discountPrice = discountPriceElement && discountPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var str = discountElement && discountElement.textContent || '';
            var discount = str.replace(/[^0-9]/g, '') || 0;
           
            if (title && discount) {
            // __utils__.echo("begin");
            // __utils__.echo(title);
            // __utils__.echo(actualPrice);
            // __utils__.echo(discountPrice);
            // __utils__.echo(discount);
            // __utils__.echo("end");
           
                tempProducts.push({
                    "title": title,
                    "actualPrice": actualPrice,
                    "discountPrice": discountPrice,
                    "discount": discount
                });
            }
        }
        __utils__.echo(tempProducts.length);
        return tempProducts;
    });
    this.echo("evaluation end");
    this.echo(productsList.length);
});


casper.run();