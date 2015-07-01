/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Mirraw',
    links: [
       // Jewellery
        {
            url: "http://www.mirraw.com/store/jewellery?min_price=1001&max_price=60000&sort=discount",
            selectors: {
                elements: 'ul.listings div.design_div',
                title: 'div.listing-detail p.listing-title > a',
                description: '',
                imageUrl: 'li.listing-card>a > img',
                actualPrice: 'div.listing-detail span > span.old-price',
                sellingPrice: 'div.listing-detail span.discount-listing-price span',
                discount: 'div.listing-social> span > span',
                redirectUrl: 'div.listing-detail p.listing-title > a'
            },
            isScroll: false,
            id: 12
        },
    {
        url: "http://www.mirraw.com/store/necklace-sets?sort=discount",
        selectors: {
            elements: 'ul.listings div.design_div',
            title: 'div.listing-detail p.listing-title > a',
            description: '',
            imageUrl: 'li.listing-card>a > img',
            actualPrice: 'div.listing-detail span > span.old-price',
            sellingPrice: 'div.listing-detail span.discount-listing-price span',
            discount: 'div.listing-social> span > span',
            redirectUrl: 'div.listing-detail p.listing-title > a'
        },
        isScroll: false,
        id: 12
    },
    {
        url: "http://www.mirraw.com/store/mangalsutra?sort=discount",
        selectors: {
            elements: 'ul.listings div.design_div',
            title: 'div.listing-detail p.listing-title > a',
            description: '',
            imageUrl: 'li.listing-card>a > img',
            actualPrice: 'div.listing-detail span > span.old-price',
            sellingPrice: 'div.listing-detail span.discount-listing-price span',
            discount: 'div.listing-social> span > span',
            redirectUrl: 'div.listing-detail p.listing-title > a'
        },
        isScroll: false,
        id: 12
    },
    {
        url: "http://www.mirraw.com/women/jewellery/earrings/studs?sort=discount",
        selectors: {
            elements: 'ul.listings div.design_div',
            title: 'div.listing-detail p.listing-title > a',
            description: '',
            imageUrl: 'li.listing-card>a > img',
            actualPrice: 'div.listing-detail span > span.old-price',
            sellingPrice: 'div.listing-detail span.discount-listing-price span',
            discount: 'div.listing-social> span > span',
            redirectUrl: 'div.listing-detail p.listing-title > a'
        },
        isScroll: false,
        id: 12
    },
    {
        url: "http://www.mirraw.com/store/anklets?sort=discount",
        selectors: {
            elements: 'ul.listings div.design_div',
            title: 'div.listing-detail p.listing-title > a',
            description: '',
            imageUrl: 'li.listing-card>a > img',
            actualPrice: 'div.listing-detail span > span.old-price',
            sellingPrice: 'div.listing-detail span.discount-listing-price span',
            discount: 'div.listing-social> span > span',
            redirectUrl: 'div.listing-detail p.listing-title > a'
        },
        isScroll: false,
        id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};