/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'FirstCry',
    links: [
      // Kids and Toys
    {
        url: "http://www.firstcry.com/searchresult.aspx?sale=5&searchstring=brand@A@B@@1@0@20@@@@@@@@@@@&sort=newarrivals&ref2=onsale_menu_dd#sale=5&searchstring=brand@@@@1@0@20@@@@@@@@@@@@@@@@&rating=&sort=HighestDiscount&&vi=four&pmonths=&cgen=&skills=&measurement=&material=&Color=&Age=&gender=&ser=&PageNo=1&scrollPos=0&pview=four_view&tc=8624",
        selectors: {
            elements: 'div.list_block div.li_inner_block',
            title: 'div.li_txt1 > a',
            description: '',
            imageUrl: 'div.list_img > a > img',
            actualPrice: 'div.rupee > span.r2 > a',
            sellingPrice: 'div.rupee > span.r1 > a',
            discount: 'div.rupee > span.r3 > a',
            redirectUrl: 'div.li_txt1 > a'
        },
        isScroll: false,
        id: 11
    }]
};


exports.getVendor = function () {
    return vendor;
};