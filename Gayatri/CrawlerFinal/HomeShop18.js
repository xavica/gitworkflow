/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'HomeShop18',
    links: [
       // LapTops
    {
        url: "http://www.homeshop18.com/laptops/categoryid:3291/search:laptops/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 1
    },
// Tablets
    {
        url: "http://www.homeshop18.com/tablets/categoryid:3254/search:tablets/?it_category=hs18bot&it_action=multiCategory&it_label=tablets&it_value=1",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 2
    },
// Telivisions
    {
        url: "http://www.homeshop18.com/televisions/categoryid:3203/search:televisions/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 5
    },
// Luggages & Bags
    {
        url: "http://www.homeshop18.com/trolley-bags-26-suitcases/category:17337/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 7
    },
//Air Conditioners
    {
        url: "http://www.homeshop18.com/air-conditioners/category:4259/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 8
    },
// Washing Machines
    {
        url: "http://www.homeshop18.com/washing-machines-26-dryers/category:3592/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 9
    },
// Games & Consoles
    {
        url: "http://www.homeshop18.com/games-consoles/categoryid:3203/search:games+%26+consoles/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 10
    },
// Toys  & Kids
    {
        url: "http://www.homeshop18.com/toys-kids/categoryid:3335/search:toys+%26+kids/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 11
    },
// fashion Jewellery
    {
        url: "http://www.homeshop18.com/fashion-jewellery/category:15143/inStock:true/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 12
    },
//Musical Instruments Kids Games
    {
        url: "http://www.homeshop18.com/musical-instruments/categoryid:3335/search:musical+instruments/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 11
    },
// Cameras
    {
        url: "http://www.homeshop18.com/cameras/categoryid:3188/search:cameras/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 4
    },
// Cameras
    {
        url: "http://www.homeshop18.com/cameras/categoryid:16523/search:cameras/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 4
    },
//Furniture
    {
        url: "http://www.homeshop18.com/furniture/category:15213/sort:Discounts/",
        selectors: {
            elements: '.grid-view .box.product_div .inside',
            title: 'p.product_title > a',
            description: '',
            imageUrl: 'p.product_image > a > img',
            actualPrice: 'p.price.clearfix > em',
            sellingPrice: 'p.price.clearfix > b',
            discount: '',
            redirectUrl: 'p.product_image > a'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};