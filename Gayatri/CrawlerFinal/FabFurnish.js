/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'FabFurnish',
    links: [
        // FURNITURE
    {
        url: "http://www.fabfurnish.com/furniture/recliners/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/wardrobes/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/outdoor/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/bar/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/l-shape-sofas/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/dining-sets/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/wall-shelves/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/dining-sideboards/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/ottomans-benches-stools/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/mirrors/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/dressing-tables/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/bookshelves/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.fabfurnish.com/furniture/entertainment-tv-units/?sort=discount&dir=desc&discount_percent=1-90",
        selectors: {
            elements: '.productsCatalog .itm',
            title: 'div a.itm-link',
            description: '',
            imageUrl: 'div a.itm-link img',
            actualPrice: '.catItmPriceSection .oldprice',
            sellingPrice: '.catItmPriceSection .itm-priceSpecial',
            discount: '.catItmPriceSection .itm-saleFlagPerNew',
            redirectUrl: 'div a.itm-link'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};