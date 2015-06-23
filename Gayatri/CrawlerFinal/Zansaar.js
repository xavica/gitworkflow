/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Zansaar',
    links: [
         //FURNITURE
    {
        url: "http://www.zansaar.com/furniture/living-room-furniture/sofas?sort=discount",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.zansaar.com/furniture/bedroom-furniture/beds?sort=discount",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.zansaar.com/furniture/bedroom-furniture/bedside-tables?sort=discount",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.zansaar.com/furniture/bedroom-furniture/dressing-tables-mirrors?sort=discount",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    },
//Furniture -wardrobes
    {
        url: "http://www.zansaar.com/furniture/bedroom-furniture/wardrobes",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.zansaar.com/furniture/bedroom-furniture/wardrobes?sort=discount",
        selectors: {
            elements: 'li[unbxdattr="product"]',
            title: 'center > img',
            description: '',
            imageUrl: 'center > img',
            actualPrice: 'del',
            sellingPrice: 'strong span:nth-child(2)',
            discount: 'div > hgroup > div > span > span',
            redirectUrl: 'span > a'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};