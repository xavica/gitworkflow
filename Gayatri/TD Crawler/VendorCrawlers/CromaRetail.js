/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'CromaRetail',
    links: [
       // LAPTOPS
    {
        url: "http://www.cromaretail.com/Laptops-c-20.aspx#!SO=DISCOUNT",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 1
    },
//TABLETS
    {
        url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=tablets&x=0&y=0",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 2
    },
//MOBILES
    {
        url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=mobiles&x=0&y=0",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 3
    },
//TELEVISIONS
    {
        url: "http://www.cromaretail.com/productsearch.aspx?txtSearch=televisions&x=0&y=0",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 5
    },
//AIR CONDITIONERS
    {
        url: "http://www.cromaretail.com/Air-Conditioners-c-46.aspx#!SO=DISCOUNT",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 8
    },
//WASHING MACHINES
    {
        url: "http://www.cromaretail.com/Washing-Machine-c-48.aspx#!SO=DISCOUNT",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 9
    },
//CAMERAS
    {
        url: "http://www.cromaretail.com/Digital-Cameras-c-14.aspx#!SO=DISCOUNT",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 4
    },
//TELEVISIONS
    {
        url: "http://www.cromaretail.com/LED-TVs-c-34.aspx#!&SO=DISCOUNT",
        selectors: {
            elements: '.gBox article',
            title: 'a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'h4.strike',
            sellingPrice: 'h3',
            discount: 'span.youSave',
            redirectUrl: 'a'
        },
         isScroll: true,
        id: 5
    }]
};


exports.getVendor = function () {
    return vendor;
};