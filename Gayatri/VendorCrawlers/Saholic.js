/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Saholic',
    links: [
           //Mobiles
    {
        url: "http://www.saholic.com/android?&page=3",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 3
    },
//Laptops
    {
        url: "http://www.saholic.com/windows-laptops",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 1
    },
//Camera
    {
        url: "http://www.saholic.com/dslr-cameras/11003",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 13
    },
//Camera
    {
        url: "http://www.saholic.com/dslr-cameras/11002",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 13
    },
//Tablets
    {
        url: "http://www.saholic.com/tablets-with-calling",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 2
    },
//Tablets
    {
        url: "http://www.saholic.com/tablets-without-calling",
        selectors: {
            elements: 'li[class*="float"]',
            title: 'div.productImg > a',
            description: '',
            imageUrl: 'div.productImg > a > img',
            actualPrice: 'span.originalPrice',
            sellingPrice: 'div.price-list > span:nth-child(3)',
            discount: '',
            redirectUrl: 'div.productImg > a'
        },
        isScroll: false,
        id: 2
    }]
};


exports.getVendor = function () {
    return vendor;
};