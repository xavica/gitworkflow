var productsList = [];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.options.waitTimeout = 10000;
casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping');

});
var s = 0;
function grabProductDetails() {
    productsList = this.evaluate(function () {
        __utils__.echo("-----------------------------------");
        var tempProducts = [];

        var elements = document.querySelectorAll('div[data-pid*="TAB"]');
        
        for (i = 0; i < elements.length; i++) {
            var titleElement = elements[i].querySelector('.pu-title');
            var actualPriceElement = elements[i].querySelector('.pu-old');
            var discountPriceElement = elements[i].querySelector('div.pu-final > span');
            var discountElement = elements[i].querySelector('span.pu-off-per');

            var title = titleElement && titleElement.textContent.trim() || '';
            var actualPrice = actualPriceElement && actualPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
            var discountPrice = discountPriceElement && discountPriceElement.textContent.replace(/[^0-9]/g, '') || 0;
            var str = discountElement && discountElement.textContent || '';
            var discount = str.replace(/[^0-9]/g, '') || 0;

            if (title && discount) {
                // __utils__.echo("begin");
                __utils__.echo(title);
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
casper.then(function(){
    s = document.querySelectorAll('div[data-pid*="TAB"]').length;
    casper.wait(1000);
});
casper.then(function () {
    casper.scrollToBottom();
    casper.waitFor(function check() {
        return this.evaluate(function () {
            return document.querySelectorAll('div[data-pid*="TAB"]').length > s;
        });

    });
});
casper.then(grabProductDetails);

casper.run();
