/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'IndiaTimes',
    links: [
      // Books
    {
        url: "http://shopping.indiatimes.com/books/",
        selectors: {
            elements: 'div[class="product-wrap flt"]',
            title: 'div.product-wrap > a.itemname',
            description: '',
            imageUrl: 'a > div.product > div > img',
            actualPrice: 'a > div.price-details > span.oldprice',
            sellingPrice: 'a > div.price-details > span.offerprice',
            discount: 'a > div.price-details > span.discount-price',
            redirectUrl: 'a.itemname'
        },
        isScroll: false,
        id: 13
    }]
};


exports.getVendor = function () {
    return vendor;
};