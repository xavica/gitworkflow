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
casper.start('http://www.flipkart.com/bags-wallets-belts/luggage-travel/pr?sid=reh%2Cplk&otracker=clp_lifestyle-luggage-travel-accessories_CategoryLinksModule_0-2_catergorylinks_5_ViewAll');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[data-pid*="DFB"],div[data-pid*="STC"]');
      
         for (i = 0; i < elements.length; i++) {
            var titleElement = elements[i].querySelector('.pu-title');
            var actualPriceElement = elements[i].querySelector('.pu-old');
            var discountPriceElement = elements[i].querySelector('div.pu-final > span');
            var discountElement = elements[i].querySelector('span.pu-off-per');

            var title = titleElement && titleElement.innerText.trim() || '';
            var actualPrice = actualPriceElement && actualPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var discountPrice = discountPriceElement && discountPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var str = discountElement && discountElement.textContent || '';
            var discount = str.replace(/[^0-9]/g, '') || 0;
           
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
    this.echo(productsList.length);
});


casper.run();