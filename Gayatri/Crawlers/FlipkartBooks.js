var productsList = [];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
// var _ = require('/proxies/lodash');

// casper.page.injectJs('lodashmin.js');
casper.start('http://www.flipkart.com/books/~bestsellers/pr?sid=bks&otracker=clp_books_clp%2FProductsExpand_0-6__viewAll');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping');

});
casper.then(function () {
    this.echo('started evaluting');
    productsList = this.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[data-pid*="978"]');
         for (i = 0; i < elements.length; i++) {
            var titleElement = elements[i].querySelector('.pu-title');
            var actualPriceElement = elements[i].querySelector('.pu-old');
            var discountPriceElement = elements[i].querySelector('div.pu-final > span');
            var discountElement = elements[i].querySelector('div.pu-discount.fk-font-11');

            var title = titleElement && titleElement.innerText.trim() || '';
            var actualPrice = actualPriceElement && actualPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var discountPrice = discountPriceElement && discountPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var str = discountElement && discountElement.textContent || '';
            var discount = str.replace(/[^0-9]/g, '') || 0;
           
            if (title && discount) {
            // __utils__.echo("-------------------");
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
var arrays = [
    ['valueOf', 'toString', 'apple', 'orange', 'banana', 'banana', 'pear', 'fish', 'pancake', 'taco', 'pizza'],
    ['valueOf', 'toString', 'taco', 'fish', 'fish', 'apple', 'pizza'],
    ['valueOf', 'toString', 'banana', 'pizza', 'fish', 'apple', 'apple']
];

function arraysInCommon(arrays){
    var i, common,
    L= arrays.length, min= Infinity;
    while(L){
        if(arrays[--L].length<min){
            min= arrays[L].length;
            i= L;
        }
    }
    common= arrays.splice(i, 1)[0];
    return common.filter(function(itm, indx){
        if(common.indexOf(itm)== indx){
            return arrays.every(function(arr){
                return arr.indexOf(itm)!= -1;
            });
        }
    });
}

casper.then(function(){
   
   var result = arraysInCommon(arrays);
   this.echo(result);

    
});
casper.run();
