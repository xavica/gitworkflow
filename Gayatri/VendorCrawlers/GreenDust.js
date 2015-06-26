/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'GreenDust',
    links: [
       // Jewellery
    {
        url: "http://www.greendust.com/washing-machine-fully-automatic-c-247_249.html?cPath=247_249&salCategory=&price_id=&manufacturer=&proType=&filter_id_txt=&sortP=2",
        selectors: {
            elements: '#products-wfix div.product-dis',
            title: 'div.product-dis-link > a',
            description: '',
            imageUrl: 'a > img',
            actualPrice: 'div.price-hold > span:nth-child(2)',
            sellingPrice: 'div.price-hold > span.price',
            discount: 'div.discountlabel > span:nth-child(1)',
            redirectUrl: 'div.product-dis-link > a'
        },
        isScroll: false,
        id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};