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
casper.start('http://www.amazon.in/s/ref=amb_link_179803727_1?ie=UTF8&bbn=4192584031&rh=i%3Aelectronics%2Cn%3A976419031%2Cn%3A!1499770031%2Cn%3A!1499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031%2Cn%3A!1499772031%2Cn%3A!1499770031%2Cn%3A!1499770031%2Cn%3A!1499772031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-leftnav&pf_rd_r=0PX4ARTQZFAC6778SCX2&pf_rd_t=101&pf_rd_p=613139487&pf_rd_i=1389432031');
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




