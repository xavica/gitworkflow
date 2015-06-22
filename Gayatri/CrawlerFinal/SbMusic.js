/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'SbMusic',
    links: [
       // Musical Instruments
    {
        url: "http://www.sbmusic.in/Guitars-depid-149289-page-1.html#page=1&sort=discount,desc",
        selectors: {
            elements: '.rightnav .catprodleft',
            title: '.catproduct > a',
            description: '',
            imageUrl: 'div.lnhghtimg > img',
            actualPrice: 'span.linecut.leftnav',
            sellingPrice: 'span.rightnav.mainmenucolor.ml10',
            discount: '',
            redirectUrl: 'div.catprodimg.leftnav.mt5 > a'
        },
        isScroll: false,
        id: 14
    },
    {
        url: "http://www.sbmusic.in/Drums-depid-149290-page-1.html#sort=discount,desc&page=3",
        selectors: {
            elements: '.rightnav .catprodleft',
            title: '.catproduct > a',
            description: '',
            imageUrl: 'div.lnhghtimg > img',
            actualPrice: 'span.linecut.leftnav',
            sellingPrice: 'span.rightnav.mainmenucolor.ml10',
            discount: '',
            redirectUrl: 'div.catprodimg.leftnav.mt5 > a'
        },
        isScroll: false,
        id: 14
    }]
};


exports.getVendor = function () {
    return vendor;
};