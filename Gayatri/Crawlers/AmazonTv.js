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
casper.start('http://www.amazon.in/s/ref=nb_sb_ss_c_0_2?url=search-alias%3Daps&field-keywords=tv&sprefix=tv%2Caps%2C348');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
       var elements = document.querySelectorAll('li[data-asin*="B00"]');
        for (i = 0; i < elements.length; i++) {
              var titleElement = elements[i].querySelector('a > h2');
            var actualPriceElement = elements[i].querySelector('.a-text-strike');
                var discountPriceElement = elements[i].querySelector('a > span');
                var discount = elements[i].querySelector('span.a-size-small.a-color-price');
               

            var title = titleElement && titleElement.innerText || '';
                var actualPrice = actualPriceElement && actualPriceElement.innerText || '';    
                 actualPrice = actualPrice.substring(1,actualPrice.indexOf('.')).replace(/[^0-9]/g, '');
                var discountPrice = discountPriceElement && discountPriceElement.innerText || '';
                discountPrice = discountPrice.substring(1,discountPrice.indexOf('.')).replace(/[^0-9]/g, '');
                var discount = discount && discount.innerText || 0;
                
            if (title && discount && actualPrice) {
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
  //  this.echo(productsList.length);
  
});


casper.run();




