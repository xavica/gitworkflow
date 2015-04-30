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
casper.start('http://www.amazon.in/s/ref=nb_sb_ss_i_0_6?url=search-alias%3Delectronics&field-keywords=camera&sprefix=camera%2Ccomputers%2C285');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
      var elements = document.querySelectorAll('li[data-asin*="B"]')
        for (i = 0; i < elements.length; i++) {

                var titleElement = elements[i].querySelector('a > h2');
                var actualPriceElement = elements[i].querySelector('span.a-text-strike');
                var discountPriceElement = elements[i].querySelector('a > span');
                var discountElement = elements[i].querySelector('span.a-size-small.a-color-price'); 

                var title = titleElement && titleElement.textContent || '';
                var actualPrice = actualPriceElement && actualPriceElement.textContent || ''; 
                actualPrice = actualPrice.substring(1,actualPrice.indexOf('.')).replace(/[^0-9]/g, '');   
                var discountPrice = discountPriceElement && discountPriceElement.textContent || '';
                discountPrice = discountPrice.substring(1,discountPrice.indexOf('.')).replace(/[^0-9]/g, '');
                        var str = discountElement && discountElement.innerText || 0 ;
                var discount = str && str.substring(str.indexOf('(')+1,str.indexOf('(')+3).replace(/[^0-9]/g, '') || 0;

            if (title && discount) {
            __utils__.echo("begin");
            __utils__.echo(title);
            __utils__.echo(actualPrice);
            __utils__.echo(discountPrice);
            __utils__.echo(discount);
            __utils__.echo("end");
           
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




