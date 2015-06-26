/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'InfiBeam',
    links: [
       // MOBILES
        {
            url: "http://www.infibeam.com/Hot_Deals/search?keybn=home_elec_mobi_mobi",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 3
        },
//Televisions 
        {
            url: "http://www.infibeam.com/led-tv/search?tvscreensize=24-inches-below",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
//Televisions
        {
            url: "http://www.infibeam.com/led-tv/search?tvscreensize=32%20Inches",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
        {
            url: "http://www.infibeam.com/led-tv/search?tvscreensize=50-inches-above",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
        {
            url: "http://www.infibeam.com/led-tv/search?features=hdmi",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
        {
            url: "http://www.infibeam.com/hd-tv",
            selectors: {
                elements: 'div[class*="productlist"]',
                title: 'div > div.product-img > a > img',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
        {
            url: "http://www.infibeam.com/3d-tv",
            selectors: {
                elements: 'div[class*="productlist"]',
                title: 'div > div.product-img > a > img',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 5
        },
           // Sun Glasses
        {
            url: "http://www.infibeam.com/Eyewear/search?q=hot+deals+in+men+sunglasses",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 6
        },
        {
            url: "http://www.infibeam.com/sunglasses/",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 6
        },
// Watches
        {
            url: "http://www.infibeam.com/mens-watches/search?q=watches%20for%20men%20deals",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 6
        },
//Accesories
{
    url: "http://www.infibeam.com/Travel_Accessories/search?q=luggage%20and%20suitcase",
    selectors: {
        elements: 'div.resultsrow div.search-icon',
        title: 'div.title > a',
        description: '',
        imageUrl: 'div.product-img > a > picture > img',
        actualPrice: 'div.price> span.scratch',
        sellingPrice: 'div.price > span.final-price',
        discount: 'div.price > span.discount',
        redirectUrl: 'div.title > a'
    },
    isScroll: false,
    id: 7
},
//Air conditioners , image property srcset
    //{
//    url: "http://www.infibeam.com/split-ac#capacity=1-1-1-4-ton&capacity=1-5-ton&capacity=1-6-ton-and-above&capacity=1-ton&capacity=below-1-ton&starRating=2-star&starRating=3-star&starRating=4-star&starRating=5-star&sort=relevance",
//    selectors: {
//        elements: 'div.resultsrow div.search-icon',
//        title: 'div.title > a',
//        description: '',
//        imageUrl: 'div.product-img > a > picture > img',
//        actualPrice: 'div.price> span.scratch',
//        sellingPrice: 'div.price > span.final-price',
//        discount: 'div.price > span.discount',
//        redirectUrl: 'div.title > a'
//    },
//    isScroll: false,
//    id: 8
//    },
//games
        {
            url: "http://www.infibeam.com/gaming-consoles-handheld/search#nothing",
            selectors: {
                elements: 'div.resultsrow div.search-icon',
                title: 'div.title > a',
                description: '',
                imageUrl: 'div.product-img > a > picture > img',
                actualPrice: 'div.price> span.scratch',
                sellingPrice: 'div.price > span.final-price',
                discount: 'div.price > span.discount',
                redirectUrl: 'div.title > a'
            },
            isScroll: false,
            id: 10
        }]
};


exports.getVendor = function () {
    return vendor;
};