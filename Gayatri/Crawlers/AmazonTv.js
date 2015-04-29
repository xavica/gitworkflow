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
casper.start('http://www.amazon.in/gp/bestsellers/electronics/1389396031');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
       var elements = document.querySelectorAll('div[class*="zg_itemImmersion"]');
        for (i = 0; i < elements.length; i++) {
              var titleElement = elements[i].querySelector('div.zg_itemWrapper > div.zg_title > a');
            var actualPriceElement = elements[i].querySelector('div.zg_itemPriceBlock_compact > div.zg_price > strong > span');
                var discountPriceElement = elements[i].querySelector('div.zg_usedPrice > span > span');
               

            var title = titleElement && titleElement.innerText || '';
                var actualPrice = actualPriceElement && actualPriceElement.innerText || '';    
                 actualPrice = actualPrice.substring(1,actualPrice.indexOf('.')).replace(/[^0-9]/g, '');
                var discountPrice = discountPriceElement && discountPriceElement.innerText || '';
                discountPrice = discountPrice.substring(1,discountPrice.indexOf('.')).replace(/[^0-9]/g, '');
                var discount = Math.trunc(1- ( +actualPrice / +discountPrice ));
                discount = discount < 0 ? 0 : discount;

            if (title && discount && actualPrice) {
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




