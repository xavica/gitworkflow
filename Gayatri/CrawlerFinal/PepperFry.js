/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'PepperFry',
    links: [
       // Furniture
    {
        url: "http://www.pepperfry.com/furniture-sofas-sofa-sets.html?type=clp-furniture-bs-3",
        selectors: {
            elements: '.customized.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.text_2 > strike',
            sellingPrice: 'span.text_2.red',
            discount: 'span.text_2 > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.pepperfry.com/site_product/search?q=bed+room+sets+view+all&src=bed+room+sets+view+all",
        selectors: {
            elements: '.clip_box.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.price_block > p > span',
            sellingPrice: 'div > span.nf_youpay > span',
            discount: 'span.nf_yousave > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.pepperfry.com/site_product/search?q=seating+view+all&src=seating+view+all",
        selectors: {
            elements: '.clip_box.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.price_block > p > span',
            sellingPrice: 'div > span.nf_youpay > span',
            discount: 'span.nf_yousave > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.pepperfry.com/site_product/search?q=beds+view+all&src=beds+view+all",
        selectors: {
            elements: '.clip_box.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.price_block > p > span',
            sellingPrice: 'div > span.nf_youpay > span',
            discount: 'span.nf_yousave > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.pepperfry.com/site_product/search?q=dining+view+all&src=dining+view+all",
        selectors: {
            elements: '.clip_box.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.price_block > p > span',
            sellingPrice: 'div > span.nf_youpay > span',
            discount: 'span.nf_yousave > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    },
    {
        url: "http://www.pepperfry.com/site_product/search?q=CASES+%26+CABINETS+view+all&src=CASES+%26+CABINETS+view+all",
        selectors: {
            elements: '.clip_box.gtm_data',
            title: 'div.title_1 > a',
            description: '',
            imageUrl: 'div.img_block > a > img',
            actualPrice: 'span.price_block > p > span',
            sellingPrice: 'div > span.nf_youpay > span',
            discount: 'span.nf_yousave > span',
            redirectUrl: 'div.title_1 > a'
        },
        isScroll: false,
        id: 15
    }]
};


exports.getVendor = function () {
    return vendor;
};