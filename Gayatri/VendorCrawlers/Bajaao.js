/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Bajaao',
    links: [
   //Musical Instruments
    {
        url: "http://www.bajaao.com/collections/special-deals",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/special-deals?page=2",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/guitar-deals?sort_by=price-ascending",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/guitar-deals?page=2&sort_by=price-ascending",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/drum-deals",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/drum-deals?page=2",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/keyboard-deals",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.bajaao.com/collections/keyboard-deals?page=2",
        selectors: {
            elements: 'div[class*="three columns"]',
            title: 'div > a',
            description: '',
            imageUrl: 'a > div > img',
            actualPrice: 'span.price.sale > span.was_price',
            sellingPrice: 'span.price.sale > span.collection_price',
            discount: '',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 14
    }]
};


exports.getVendor = function () {
    return vendor;
};