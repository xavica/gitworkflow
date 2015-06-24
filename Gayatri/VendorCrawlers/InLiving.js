/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'InLiving',
    links: [
           //Furniture
    {
        url: "http://www.inliving.com/deals-and-discounts",
        selectors: {
            elements: 'li[class*="item"] ',
            title: 'div.pro_topadst > h2 > a',
            description: '',
            imageUrl: 'div.pro_topadst > a > img',
            actualPrice: 'p.special-price > span.price',
            sellingPrice: 'p.old-price > span.price',
            discount: 'div > span.l-off',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 14
    },
 //Furniture
    {
        url: "http://www.inliving.com/deals-and-discounts?p=2",
        selectors: {
            elements: 'li[class*="item"] ',
            title: 'div.pro_topadst > h2 > a',
            description: '',
            imageUrl: 'div.pro_topadst > a > img',
            actualPrice: 'p.special-price > span.price',
            sellingPrice: 'p.old-price > span.price',
            discount: 'div > span.l-off',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.inliving.com/deals-and-discounts?p=2",
        selectors: {
            elements: 'li[class*="item"] ',
            title: 'div.pro_topadst > h2 > a',
            description: '',
            imageUrl: 'div.pro_topadst > a > img',
            actualPrice: 'p.special-price > span.price',
            sellingPrice: 'p.old-price > span.price',
            discount: 'div > span.l-off',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 14
    }]
};


exports.getVendor = function () {
    return vendor;
};