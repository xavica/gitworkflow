/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Evok',
    links: [
        // Sofaes
    {
        url: "http://www.evok.in/furniture/living-room/sofas-and-sets.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
// side-Tables
    {
        url: "http://www.evok.in/furniture/living-room/center-side-tables.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
//furniture Tables
{
    url: "http://www.evok.in/furniture/living-room/consoles-cabinets.html?dir=asc&limit=12&order=discount",
    selectors: {
        elements: 'div.category-products > ul > li',
        title: 'h3.product-name',
        description: '',
        imageUrl: '.product-item img',
        actualPrice: '.price-box p.old-price span.price',
        sellingPrice: '.price-box p.special-price span.price',
        discount: '',
        redirectUrl: 'h3 > a'
    },
    isScroll: false,
    id: 15
},
    {
        url: "http://www.evok.in/furniture/dining-room.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/living-room/entertainment-units.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/dining-room/dining-table-sets.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/dining-room/dining-tables.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/dining-room/dining-benches-chairs.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/dining-room/bar.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/furniture/bed-room.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15

    },
    {
        url: "http://www.evok.in/furniture/study-room.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.evok.in/sale.html?dir=asc&order=discount",
        selectors: {
            elements: 'div.category-products > ul > li',
            title: 'h3.product-name',
            description: '',
            imageUrl: '.product-item img',
            actualPrice: '.price-box p.old-price span.price',
            sellingPrice: '.price-box p.special-price span.price',
            discount: '',
            redirectUrl: 'h3 > a'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};