/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'EzoneOnline',
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
            url: "http://www.bagittoday.com/faces/tiles/search.jsp?q=watches+for+men&searchKeyword_q_tmp=watches&productID=&narrowcatalogueID=2&narrowcategoryID=&narrowparentCategoryID=&catalogueID=2&categoryID=&parentCategoryID=&sid=&bid=&prc=&k1=&k2=&k3=&k4=&k5=&k6=&k7=&k8=&k9=&k10=&k11=&k12=&vt=g&rpp=&col=&sort=16&pn=1&dcty=&bnm=&narr=&entityType=&entityId=&topParent=&pageName=%2Ftiles%2Fsearch.jsp&brandId=&brandCmsFlag=&cnm=&cartSize=0&boutiqueID=&parentBoutiqueID=&narrowboutiqueID=&sortCall=sortCall&keywordText=watches+for+men&booksORnonbooks=&callTextSearchOrNot=Y&listSize=0&searchselectinparam=N",
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