/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'BagItToday',
    links: [
        {
            // LAPTOPS

            url: "http://www.bagittoday.com/budget-laptops/c-2443/",
            selectors: {
                elements: 'div[class="eleprobox"]',
                title: 'div.proimgbox > a > img',
                description: '',
                imageUrl: 'div.proimgbox > a > img',
                actualPrice: 'div.proprcbox > span.oldprc > span:nth-child(2)',
                sellingPrice: 'div.proprcbox > span.newprc',
                discount: 'div.proprcbox .discont-value',
                redirectUrl: 'div.proimgbox > a'
            },
            isScroll: true,
            id: 1
        },
        {
            //TABLETS
            url: "http://www.bagittoday.com/android-tablets/c-2146/",
            selectors: {
                elements: 'div[class="eleprobox"]',
                title: 'div.proimgbox > a > img',
                description: '',
                imageUrl: 'div.proimgbox > a > img',
                actualPrice: 'div.proprcbox > span.oldprc > span:nth-child(2)',
                sellingPrice: 'div.proprcbox > span.newprc',
                discount: 'div.proprcbox .discont-value',
                redirectUrl: 'div.proimgbox > a'
            },
            isScroll: true,
            id: 2
        },
        {
            //SUNGLASSES
            url: "http://www.bagittoday.com/sunglasses/c-34/",
            selectors: {
                elements: 'div[class="eleprobox"]',
                title: 'div.proimgbox > a > img',
                description: '',
                imageUrl: 'div.proimgbox > a > img',
                actualPrice: 'div.proprcbox > span.oldprc > span:nth-child(2)',
                sellingPrice: 'div.proprcbox > span.newprc',
                discount: 'div.proprcbox .discont-value',
                redirectUrl: 'div.proimgbox > a'
            },
            isScroll: true,
            id: 6
        },
        {
            //WATCHES
            url: "http://www.bagittoday.com/faces/tiles/search.jsp?q=watches%20for%20men&catalogueID=2&categoryID=44&cnm=",
            selectors: {
                elements: 'div[class="eleprobox"]',
                title: 'div.proimgbox > a > img',
                description: '',
                imageUrl: 'div.proimgbox > a > img',
                actualPrice: 'div.proprcbox > span.oldprc > span:nth-child(2)',
                sellingPrice: 'div.proprcbox > span.newprc',
                discount: 'div.proprcbox .discont-value',
                redirectUrl: 'div.proimgbox > a'
            },
            isScroll: true,
            id: 6
        }]
};


exports.getVendor = function () {
    return vendor;
};