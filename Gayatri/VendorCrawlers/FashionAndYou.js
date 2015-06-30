/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Fashion & U',
    links: [
            //Fashion Jwellery
    {
        url: "http://www.fashionandyou.com/women/fashion_jewelry",
        selectors: {
            elements: 'div[class*="product"]',
            title: 'div.prod-info > a.ev-prod-name',
            description: '',
            imageUrl: 'div.prod-img > a > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'div > span.new-price',
            discount: 'div.discount-tag',
            redirectUrl: 'div.prod-img > a'
        },
        isScroll: true,
        id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};