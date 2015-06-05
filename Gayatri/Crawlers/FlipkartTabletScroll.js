var productsList = [],finalArray = [];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.options.waitTimeout = 1000;
casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping');

});

function grabProductDetails() {
    productsList = this.evaluate(function () {
        __utils__.echo("-----------------------------------");
        var tempProducts = [];

        var elements = document.querySelectorAll('div[data-pid*="TAB"]');
        
        for (i = 0; i < elements.length; i++) {
            var titleElement = elements[i].querySelector('div.pu-title > a');
            var actualPriceElement = elements[i].querySelector('.pu-old');
            var discountPriceElement = elements[i].querySelector('div.pu-final > span');
            var discountElement = elements[i].querySelector('span.pu-off-per');

            var title = titleElement && titleElement.getAttribute('title') || '';
            var actualPrice = actualPriceElement && actualPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
            var discountPrice = discountPriceElement && discountPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
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
}
casper.then(grabProductDetails);
casper.then(function(){
    casper.scrollToBottom();
    casper.wait(10000);
});
casper.then(grabProductDetails);
casper.then(function () {
    this.scrollToBottom();
    casper.wait(10000);
});
casper.then(grabProductDetails);
// casper.then(function(){
//     casper.scrollToBottom();
//     casper.wait(1000);
// });
// casper.then(grabProductDetails);
casper.then(function(){
    finalArray = productsList.filter(function(elem, pos) {
   return productsList.indexOf(elem) == pos;
  });
    for(i=0;i<finalArray.length;i++)
    this.echo(finalArray[i].title);
});


casper.run();
