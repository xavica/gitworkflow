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
var page = require('webpage').create();
page.open("http://www.snapdeal.com/products/mobiles-tablets?q=Price%3A2331%2C63299&sort=plrty", function () {


    productsList = page.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('.productWrapper');
        for (i = 0; i < elements.length; i++) {

            var titleElement = elements[i].querySelector('div.product-title > a');
            var actualPriceElement = elements[i].querySelector('#price');
            var discountPriceElement = elements[i].querySelector('#disc > strike');
            var discountElement = elements[i].querySelector('#disc > s');


            var title = titleElement && titleElement.innerText || '';
            var actualPrice = actualPriceElement.innerText.replace(/[^0-9]/g, '')|| 0;
            var discountPrice = discountPriceElement.innerText.replace(/[^0-9]/g, '') || 0;
            var discount = discountElement.innerText.replace(/[^0-9]/g, '').trim() || 0;

            //__utils__.echo("begin");
            //__utils__.echo(title);
            //__utils__.echo(actualPrice);
            //__utils__.echo(discountPrice);
            //__utils__.echo(discount);
            //__utils__.echo("end");
            //__utils__.echo(i);
            if (title && +discount) {
                tempProducts.push({
                    "title": title,
                    "actualPrice": actualPrice,
                    "discountPrice": discountPrice,
                    // "description": description,
                    // "redirectUrl": redirectUrl,
                    "discount": discount
                });
            }
        }
        return tempProducts;

    });

    console.log('Num Products' + productsList.length);

    phantom.exit();
});



