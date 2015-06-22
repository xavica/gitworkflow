/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */
var vendor = {
    storeName : 'Amazon',
    links : [{
        url: "http://www.amazon.in/s/ref=nb_sb_ss_c_0_2?url=search-alias%3Daps&field-keywords=tv&sprefix=tv%2Caps%2C348",
        selectors: {
            elements: 'li[data-asin*="B"]',
            title: 'div.a-row > a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'span.a-text-strike',
            sellingPrice: 'a > span',
            discount: 'span.a-size-small.a-color-price',
            redirectUrl: 'div.a-row.a-spacing-none > a'
        },
        isScroll: false,
        id: 5
    }]
};


exports.getVendor = function () {
    return vendor;
};