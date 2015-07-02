/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'EzoneOnline',
    links: [
            //Air Conditioners
    {
        url: "http://www.ezoneonline.in/Categories/Home-Appliances/Air-Conditioners/c/airconditioners?gclid=CjwKEAjwndqrBRC16IyeqPicp3ASJAB-vB-cDB02AmeoTzxi0c6ceGwHyn0Wgnqy9c13cvVqajFayRoCP5Lw_wcB",
        selectors: {
            elements: 'ul > section > li ',
            title: 'a.productMainLink > img',
            description: '',
            imageUrl: 'a.productMainLink > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'span > span.price',
            discount: 'div > span',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 8
    },
//Mobiles
    {
        url: "http://www.ezoneonline.in/Categories/Phones/Mobile-Phones/c/mobilephones",
        selectors: {
            elements: 'ul > section > li ',
            title: 'a.productMainLink > img',
            description: '',
            imageUrl: 'a.productMainLink > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'span > span.price',
            discount: 'div > span',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 3
    },
//Mobiles
    {
        url: "http://www.ezoneonline.in/Categories/Phones/Mobile-Phones/c/mobilephones?q=%3Aproduct-boost&page=1",
        selectors: {
            elements: 'ul > section > li ',
            title: 'a.productMainLink > img',
            description: '',
            imageUrl: 'a.productMainLink > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'span > span.price',
            discount: 'div > span',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 3
    },
//camera
    {
        url: "http://www.ezoneonline.in/Categories/Photography/Digital-SLR-Cameras/c/digitalslrcameras",
        selectors: {
            elements: 'ul > section > li ',
            title: 'a.productMainLink > img',
            description: '',
            imageUrl: 'a.productMainLink > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'span > span.price',
            discount: 'div > span',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 4
    },
//Televisions
    {
        url: "http://www.ezoneonline.in/Categories/Home-Entertainment/LCD-LED-Plasma-TV/c/lcdledplasmatv?sort=topRated&q=%3Aprice-asc#",
        selectors: {
            elements: 'ul > section > li ',
            title: 'a.productMainLink > img',
            description: '',
            imageUrl: 'a.productMainLink > img',
            actualPrice: 'div > span.old-price',
            sellingPrice: 'span > span.price',
            discount: 'div > span',
            redirectUrl: 'div > a'
        },
        isScroll: false,
        id: 5
    },
//Laptops
    {
    url: "http://www.ezoneonline.in/Categories/Computers/Laptops-%26-Macbooks/Laptops/c/laptops",
    selectors: {
        elements: 'ul > section > li ',
        title: 'a.productMainLink > img',
        description: '',
        imageUrl: 'a.productMainLink > img',
        actualPrice: 'div > span.old-price',
        sellingPrice: 'span > span.price',
        discount: 'div > span',
        redirectUrl: 'div > a'
    },
    isScroll: false,
    id: 1
}]
};


exports.getVendor = function () {
    return vendor;
};