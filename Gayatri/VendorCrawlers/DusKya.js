/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'DusKya',
    links: [
       // Sun Glasses
    {
        url: "http://www.10kya.com/fashion/men/sunglasses-eyewear.html",
        selectors: {
            elements: '.products-grid>.item',
            title: 'h2 > a',
            description: '',
            imageUrl: 'div > a > img',
            actualPrice: '.price-box .old-price .price',
            sellingPrice: '.price-box .special-price .price',
            discount: '.cataloglabel-badgecat.position-BR > span',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 6
    },
    {
        url: "http://www.10kya.com/fashion/men/mens-watches.html#page=1&top=1600& deals",
        selectors: {
            elements: '.products-grid>.item',
            title: 'h2 > a',
            description: '',
            imageUrl: 'div > a > img',
            actualPrice: '.price-box .old-price .price',
            sellingPrice: '.price-box .special-price .price',
            discount: '.cataloglabel-badgecat.position-BR > span',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 6
    },
    {
        url: "http://www.10kya.com/fashion/men/men-s-footwear.html",
        selectors: {
            elements: '.products-grid>.item',
            title: 'h2 > a',
            description: '',
            imageUrl: 'div > a > img',
            actualPrice: '.price-box .old-price .price',
            sellingPrice: '.price-box .special-price .price',
            discount: '.cataloglabel-badgecat.position-BR > span',
            redirectUrl: 'h2 > a'
        },
        isScroll: false,
        id: 6
    }]
};


exports.getVendor = function () {
    return vendor;
};