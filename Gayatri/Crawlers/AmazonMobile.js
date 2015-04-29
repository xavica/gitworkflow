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
casper.start('http://www.amazon.in/s/ref=sr_abn_pp_ss_1389432031?ie=UTF8&bbn=1389432031&rh=n%3A1389432031');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[name*="B00"]');
        for (i = 0; i < elements.length; i++) {

             var titleElement = elements[i].querySelector('h3 > a > span');
                var actualPriceElement = elements[i].querySelector('ul > li.newp > div > a > del');
                var discountPriceElement = elements[i].querySelector('ul > li.newp > div > a > span');
                var discountElement = elements[i].querySelector('ul > li:nth-child(2) > span:nth-child(2)'); 

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




