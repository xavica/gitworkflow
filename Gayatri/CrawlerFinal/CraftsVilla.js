/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'CraftsVilla',
    links: [
        //Fashion Jwellery
    {
        url: "http://www.craftsvilla.com/jewellery-jewelry/necklaces.html?dir=desc&order=discount",
        selectors: {
            elements: 'li[class*="item"]',
            title: 'p.shopbrief > a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'p.old-price',
            sellingPrice: 'p.special-price',
            discount: 'p.codimage3',
            redirectUrl: 'p.shopbrief > a'
        },
        isScroll: false,
        id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};