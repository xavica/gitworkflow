/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'CashKaro',
    links: [
         //Soft Toys
    {
        url: "http://cashkaro.com/product/babies-toys/baby-toys?page=2&sort=discount&Brand[]=Deals%20India",
        selectors: {
            elements: 'div[class*="clear"]',
            title: 'a.product_name',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'p > span',
            sellingPrice: 'p > strong',
            discount: 'div.product_img> span',
            redirectUrl: 'a.product_name'
        },
         isScroll: true,
        id: 11
    },
    //Laptops
    {
        url: "http://cashkaro.com/product/electronics/laptops-computers?page=0",
        selectors: {
            elements: 'div[class*="clear"]',
            title: 'a.product_name',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'p > span',
            sellingPrice: 'p > strong',
            discount: 'div.product_img> span',
            redirectUrl: 'a.product_name'
        },
         isScroll: true,
        id: 1
    },
   //Furniture
    {
        url: "http://cashkaro.com/product/home-and-kitchen/furniture?page=0",
        selectors: {
            elements: 'div[class*="clear"]',
            title: 'a.product_name',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'p > span',
            sellingPrice: 'p > strong',
            discount: 'div.product_img> span',
            redirectUrl: 'a.product_name'
        },
         isScroll: true,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};