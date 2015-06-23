/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'TvDeals',
    links: [
      //Telivisions 
    {
        url: "http://www.tvdeal.in/Regular-LED-Televisions",
        selectors: {
            elements: 'div[class*="three"]',
            title: 'div.image > a > img',
            description: '',
            imageUrl: 'div.image > a > img',
            actualPrice: 'div.price > span.price-old',
            sellingPrice: 'div.price > span.price-new',
            discount: '',
            redirectUrl: 'div.image > a'
        },
        isScroll: false,
        id: 5
    },
// LED Tv's
    {
        url: "http://www.tvdeal.in/Smart-LED-TV",
        selectors: {
            elements: 'div[class*="three"]',
            title: 'div.image > a > img',
            description: '',
            imageUrl: 'div.image > a > img',
            actualPrice: 'div.price > span.price-old',
            sellingPrice: 'div.price > span.price-new',
            discount: '',
            redirectUrl: 'div.image > a'
        },
        isScroll: false,
        id: 5
    },
// Telivisions LED
    {
        url: "http://www.tvdeal.in/Smart-Plus-3D-LED-TVs?limit=15",
        selectors: {
            elements: 'div[class*="three"]',
            title: 'div.image > a > img',
            description: '',
            imageUrl: 'div.image > a > img',
            actualPrice: 'div.price > span.price-old',
            sellingPrice: 'div.price > span.price-new',
            discount: '',
            redirectUrl: 'div.image > a'
        },
        isScroll: false,
        id: 5
    }]
};


exports.getVendor = function () {
    return vendor;
};