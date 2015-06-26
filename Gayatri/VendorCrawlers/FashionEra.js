/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'FashionEra',
    links: [
        // Jewellery
    {
        url: "http://www.fashionara.com/ladies/accessories/fashion-jewelry.html#!dir=desc&sort=discount_featured",
        selectors: {
            elements: 'div.category-products > div.products-page li.item',
            title: 'div.product-image-box > a > img.little_image',
            description: '',
            imageUrl: 'div.product-image-box > a > img.little_image',
            actualPrice: 'div.price-box > span.old-price > span',
            sellingPrice: 'div.price-box > span.special-price > span.price',
            discount: 'div.save-product-mask > div.percent',
            redirectUrl: 'div.product-image-box > a'
        },
        isScroll: false,
        id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};