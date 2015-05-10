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
page.open("http://www.snapdeal.com/products/computers-laptops?q=DedicatedGraphicsMemory_s%3A2+GB%5E3+GB%5E4+GB%7CPrice%3A5499%2C219150&sort=bstslr", function () {


    productsList = page.evaluate(function () {
        var tempProducts = [];
        var elements = document.querySelectorAll('div[categoryid="57"]');
        for (i = 0; i < elements.length; i++) {

            var titleElement = elements[i].querySelector('div.outerImg > div > a > img');
            var actualPriceElement = elements[i].querySelector('span > strike');
            var discountPriceElement = elements[i];
            var discountElement = elements[i].querySelector('span > s');


            var title = titleElement && titleElement.getAttribute('title') || '';
            var actualPrice = actualPriceElement.innerText.replace(/[^0-9]/g, '')|| 0;
            var discountPrice = discountPriceElement.getAttribute('price').replace(/[^0-9]/g, '') || 0;
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



