/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'RajMusical',
    links: [
       // Musical Instruments
    {
        url: "http://www.rajmusical.com/musical-instruments/guitars/electric-guitars.html",
        selectors: {
            elements: 'div.catalog-listing  li',
            title: 'li h3 > a',
            description: '',
            imageUrl: 'p.product-image > a > img',
            actualPrice: '.price-box .price',
            sellingPrice: '.special-price .price',
            discount: '',
            redirectUrl: 'p.product-image > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.rajmusical.com/hot-deals/deal-of-the-day.html",
        selectors: {
            elements: 'div.catalog-listing  li',
            title: 'li h3 > a',
            description: '',
            imageUrl: 'p.product-image > a > img',
            actualPrice: '.price-box .price',
            sellingPrice: '.special-price .price',
            discount: '',
            redirectUrl: 'p.product-image > a'
        },
        isScroll: false,
        id: 14
    }]
};


exports.getVendor = function () {
    return vendor;
};