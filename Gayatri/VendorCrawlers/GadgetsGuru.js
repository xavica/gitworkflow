/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'GadgetsGuru',
    links: [
  // Cameras
{
    url: "http://www.gadgetsguru.com/cameras-digitalcameras-accessories-cheap-sale.aspx",
    selectors: {
        elements: '#ctl00_cphIndexProd_dlProd > tbody td > div',
        title: 'div.hBlue',
        description: '',
        imageUrl: 'div.hImg > a > img',
        actualPrice: 'div.hBlak > s',
        sellingPrice: 'div.hOrng',
        discount: '',
        redirectUrl: 'div.hImg > a'
    },
    isScroll: false,
    id: 12
    }]
};


exports.getVendor = function () {
    return vendor;
};