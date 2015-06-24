/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'BookAdda',
    links: [
       // Books
    {
        url: "http://www.bookadda.com/view-books/best-business-best-reads",
        selectors: {
            elements: 'div > div.results_outer > ul > li',
            title: 'div.details > div > a',
            description: '',
            imageUrl: 'div.frame > a > img',
            actualPrice: 'div > strong > s',
            sellingPrice: 'span.new_price > strong',
            discount: '',
            redirectUrl: 'div.details > div > a'
        },
        isScroll: false,
        id: 13
    },
    {
        url: "http://www.bookadda.com/view-books/biographies-and-autobiographies",
        selectors: {
            elements: 'div > div.results_outer > ul > li',
            title: 'div.details > div > a',
            description: '',
            imageUrl: 'div.frame > a > img',
            actualPrice: 'div > strong > s',
            sellingPrice: 'span.new_price > strong',
            discount: '',
            redirectUrl: 'div.details > div > a'
        },
        isScroll: false,
        id: 13
    },
    {
        url: "http://www.bookadda.com/view-books/cooking-food-and-drink",
        selectors: {
            elements: 'div > div.results_outer > ul > li',
            title: 'div.details > div > a',
            description: '',
            imageUrl: 'div.frame > a > img',
            actualPrice: 'div > strong > s',
            sellingPrice: 'span.new_price > strong',
            discount: '',
            redirectUrl: 'div.details > div > a'
        },
        isScroll: false,
        id: 13
    },
    {
        url: "http://www.bookadda.com/view-books/travel-and-guide-books",
        selectors: {
            elements: 'div > div.results_outer > ul > li',
            title: 'div.details > div > a',
            description: '',
            imageUrl: 'div.frame > a > img',
            actualPrice: 'div > strong > s',
            sellingPrice: 'span.new_price > strong',
            discount: '',
            redirectUrl: 'div.details > div > a'
        },
        isScroll: false,
        id: 13
    }]
};


exports.getVendor = function () {
    return vendor;
};