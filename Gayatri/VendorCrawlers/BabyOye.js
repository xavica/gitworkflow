/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */
var vendor = {
    storeName: 'BabyOye',
    links: [{
        url: "http://www.babyoye.com/d/Toys/~pg=100-224999/~ageGroup=2-3%20years/~ageGroup=3-4%20years/~ageGroup=4-5%20years/~ageGroup=5-6%20years/~ageGroup=6-7%20years/~ageGroup=7-8%20years/~ageGroup=8-9%20years/~eoos=true/~SORT_BY=discountpercent??aff_id=103&utm_source=google&utm_medium=cpc&utm_campaign=Kids-Toys(BMM)&utm_term=keyword&utm_content=creative&gclid=CjwKEAjwndqrBRC16IyeqPicp3ASJAB-vB-c_2YBSXz1lUD-a8uuH_ijAevdmxcrSSRvt4VZ_UgGzxoCz2Dw_wcB",
        selectors: {
            elements: '.product_summary',
            title: 'div. product_image_border > a > img',
            description: '',
            imageUrl: 'div.gal_img > a > img',
            actualPrice: '.big_prodetail_tab_discount span.strikePrice',
            sellingPrice: '.big_prodetail_tab_discount p',
            discount: '.offBg span.number',
            redirectUrl: 'div.big_prodetail_tab > a'
        },
        isScroll: true,
        id: 11
    }]
};

exports.getVendor = function () {
    return vendor;
};