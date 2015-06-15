var productsList = [];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start('http://www.snapdeal.com/products/mobiles-mobile-phones?sort=plrty&');
casper.then(function () {
    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = casper.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[categoryid="175"]');
        for (i = 0; i < elements.length; i++) {

            // var titleElement = elements[i].querySelector('div > a > img');
            var actualPriceElement = elements[i].querySelector('div.product-price > div > span > strike');
            // var discountPriceElement = elements[i];
            // var discountElement = elements[i].querySelector('div.product-price > div > span > s');
            // var imageUrlElement = elements[i].querySelector('div > div.productWrapper > div.outerImg > div > a > img');


            // var title = titleElement && titleElement.getAttribute('title') || '';
            var actualPrice = actualPriceElement.innerText.replace(/[^0-9]/g, '')|| 0;
            // var discountPrice = discountPriceElement.getAttribute('price').replace(/[^0-9]/g, '') || 0;
            // var discount = discountElement.innerText.replace(/[^0-9]/g, '').trim() || 0;
            // var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';


            // __utils__.echo("begin");
            // __utils__.echo(title);
            __utils__.echo(actualPrice);
            // __utils__.echo(discountPrice);
            // __utils__.echo(discount);
            // __utils__.echo(imageUrl);
            // __utils__.echo("end");
            //__utils__.echo(i);
            // if (title) {
                tempProducts.push({
                    // "title": title,
                    "actualPrice": actualPrice,
                    // "discountPrice": discountPrice,
                    // // "description": description,
                    // // "redirectUrl": redirectUrl,
                    // "discount": discount
                });
            // }
        }
        return tempProducts;

    });

    console.log('Num Products' + productsList.length);
});
casper.run();



