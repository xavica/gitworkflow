/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'ShopClues',
    links: [
        // LAPTOPS
    {
        url: "http://www.shopclues.com/computers/laptop-special.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 1
    },
//Tablets
    {
        url: "http://www.shopclues.com/mobiles/tablet-en.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 2
    },
//Mobiles
    {
        url: "http://www.shopclues.com/mobiles/mobile-phones/android-phones.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 3
    },
//Televisions
    {
        url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=televisions&auto_suggest=0&cid=1781&dispatch=products.search&zettata.bId=control.2015-06-11-03%3A30&zettata.eId=solr407vs410.2015-06-11-03%3A30&sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 5
    },
//Bags
    {
        url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=luggage+bags+and+suitcase&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-04%3A30&zettata.eId=solr407vs410.2015-06-11-04%3A30&sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 7
    },
//Air Conditioners
    {
        url: "http://www.shopclues.com/home-applliances/major-appliances/air-conditioners.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 8
    },
//Washing Machines
    {
        url: "http://www.shopclues.com/home-applliances/major-appliances/washing-machine.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 9
    },
//VideoGames
    {
        url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=game+consoles&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-10-05%3A30&zettata.eId=solr407vs410.2015-06-10-05%3A30",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 10
    },
//kids and Babies
    {
        url: "http://www.shopclues.com/kids-and-baby-en/deals-of-the-day-14.html",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 11
    },
//Jewellery
    {
        url: "http://www.shopclues.com/jewelry-and-watches/temple-jewelry-special.html",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 12
    },
//Books
    {
        url: "http://www.shopclues.com/books-and-stationery/books-en-2/new-arrivals-and-bestsellers.html?sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 13
    },
//Cameras
    {
        url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=cameras&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-05%3A00&zettata.eId=solr407vs410.2015-06-11-05%3A00&sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 4
    },
//Furniture
    {
        url: "http://www.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&user_gender=&user_pincode=&z=1&q=furniture&auto_suggest=0&cid=0&dispatch=products.search&zettata.bId=control.2015-06-11-07%3A00&zettata.eId=solr407vs410.2015-06-11-07%3A00&sort_by=hotdeals&sort_order=desc",
        selectors: {
            elements: 'div.products-grid div.grid-product',
            title: 'div.details a.name',
            description: '',
            imageUrl: 'a>img',
            actualPrice: 'div.product-price > span.old-price:nth-child(5)',
            sellingPrice: 'div.product-price > span.price',
            discount: 'div.discount>label',
            redirectUrl: 'div.details a.name'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};