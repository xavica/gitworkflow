/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */
var configurations = require('./configurations.js').configurations,
    categoriesConfig = configurations.categories;

var vendor = {
    storeName: 'GiftEase',
    links: [
        // Gifts
    {
        url: "http://www.giftease.com/books/childrens-books?dir=desc&order=saving",
        selectors: {
            elements: 'ul.products-grid li.item',
            title: 'div.proListBox > h2',
            description: '',
            imageUrl: 'div.proListBox > a > img',
            actualPrice: 'div.listingPrice > p.old-price > span:nth-child(2)',
            sellingPrice: 'div.listingPrice > p:nth-child(3) > span:nth-child(2)',
            discount: 'div.proListBox > div.f-right.yousave > div.price',
            redirectUrl: 'div.proListBox > a'
        },
        isScroll: false,
        id: categoriesConfig.gamesConsoles
    },
    {
        url: "http://www.giftease.com/books/business-management?dir=desc&order=saving",
        selectors: {
            elements: 'ul.products-grid li.item',
            title: 'div.proListBox > h2',
            description: '',
            imageUrl: 'div.proListBox > a > img',
            actualPrice: 'div.listingPrice > p.old-price > span:nth-child(2)',
            sellingPrice: 'div.listingPrice > p:nth-child(3) > span:nth-child(2)',
            discount: 'div.proListBox > div.f-right.yousave > div.price',
            redirectUrl: 'div.proListBox > a'
        },
        isScroll: false,
        id: categoriesConfig.gamesConsoles
    },
    {
        url: "http://www.giftease.com/books/childrens-books/story-books?dir=desc&order=saving",
        selectors: {
            elements: 'ul.products-grid li.item',
            title: 'div.proListBox > h2',
            description: '',
            imageUrl: 'div.proListBox > a > img',
            actualPrice: 'div.listingPrice > p.old-price > span:nth-child(2)',
            sellingPrice: 'div.listingPrice > p:nth-child(3) > span:nth-child(2)',
            discount: 'div.proListBox > div.f-right.yousave > div.price',
            redirectUrl: 'div.proListBox > a'
        },
        isScroll: false,
        id: categoriesConfig.gamesConsoles
    }]
};


exports.getVendor = function () {
    return vendor;
};