/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Ebay',
    links: [
      // Cameras
    {
        url: "http://deals.ebay.in/ebaydeals/cameras-2",
        selectors: {
            elements: 'div[class*="listingblock"]',
            title: 'div.itemtitle > p > a',
            description: '',
            imageUrl: 'div.imgListingContainer > a > img',
            actualPrice: 'div.itemPriceStriked > p',
            sellingPrice: 'div.itemPrice > p',
            discount: 'div.discountLabel > div > span',
            redirectUrl: 'div.imgListingContainer > a'
        },
        isScroll: false,
        id: 4
    },
// Laptops
    {
        url: "http://deals.ebay.in/ebaydeals/laptops-3",
        selectors: {
            elements: 'div[class*="listingblock"]',
            title: 'div.itemtitle > p > a',
            description: '',
            imageUrl: 'div.imgListingContainer > a > img',
            actualPrice: 'div.itemPriceStriked > p',
            sellingPrice: 'div.itemPrice > p',
            discount: 'div.discountLabel > div > span',
            redirectUrl: 'div.imgListingContainer > a'
        },
        isScroll: false,
        id: 1
    },
////Mobiles
    {
        url: "http://deals.ebay.in/ebaydeals/mobiles-1",
        selectors: {
            elements: 'div[class*="listingblock"]',
            title: 'div.itemtitle > p > a',
            description: '',
            imageUrl: 'div.imgListingContainer > a > img',
            actualPrice: 'div.itemPriceStriked > p',
            sellingPrice: 'div.itemPrice > p',
            discount: 'div.discountLabel > div > span',
            redirectUrl: 'div.imgListingContainer > a'
        },
        isScroll: false,
        id: 3
    },
//// Tablets
    {
        url: "http://deals.ebay.in/ebaydeals/tablets-6",
        selectors: {
            elements: 'div[class*="listingblock"]',
            title: 'div.itemtitle > p > a',
            description: '',
            imageUrl: 'div.imgListingContainer > a > img',
            actualPrice: 'div.itemPriceStriked > p',
            sellingPrice: 'div.itemPrice > p',
            discount: 'div.discountLabel > div > span',
            redirectUrl: 'div.imgListingContainer > a'
        },
        isScroll: false,
        id: 2
    },
///// Telivisions
    {
        url: "http://deals.ebay.in/ebaydeals/televisions-4",
        selectors: {
            elements: 'div[class*="listingblock"]',
            title: 'div.itemtitle > p > a',
            description: '',
            imageUrl: 'div.imgListingContainer > a > img',
            actualPrice: 'div.itemPriceStriked > p',
            sellingPrice: 'div.itemPrice > p',
            discount: 'div.discountLabel > div > span',
            redirectUrl: 'div.imgListingContainer > a'
        },
        isScroll: false,
        id: 5
    }]
};


exports.getVendor = function () {
    return vendor;
};