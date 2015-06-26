/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Jabbong',
    links: [
   // Sunglasses
    {
        url: "http://www.jabong.com/men/accessories/sunglasses/?sort=discount&dir=desc",
        selectors: {
            elements: 'section.p-list > ul > li',
            title: 'span.qa-brandTitle',
            description: '',
            imageUrl: 'img.itm-img',
            actualPrice: 'a > span.price > strike',
            sellingPrice: 'a > span.price > strong.qa-price',
            discount: 'a > span.price >span.discount',
            redirectUrl: 'li.added > a'
        },
        isScroll: false,
        id: 6
    },
    //Watches
     {
         url: "http://www.jabong.com/men/accessories/watches/?sort=discount&dir=desc",
         selectors: {
             elements: 'section.p-list > ul > li',
             title: 'span.qa-brandTitle',
             description: '',
             imageUrl: 'img.itm-img',
             actualPrice: ' a > span.price > strike',
             sellingPrice: 'a > span.price > strong.qa-price',
             discount: 'a > span.price >span.discount',
             redirectUrl: 'li.added > a'
         },
         isScroll: false,
         id: 6
     },
        //Shoes
        {
            url: "http://www.jabong.com/men/shoes/sports-shoes/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 6
        },
        //Shoes
        {
            url: "http://www.jabong.com/men/shoes/sneakers/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 6
        },
        //Shoes
        {
            url: "http://www.jabong.com/men/shoes/casual-shoes/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 6
        },
        //Shoes
        {
            url: "http://www.jabong.com/men/shoes/boots/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 6
        },
        //Shoes
        {
            url: "http://www.jabong.com/men/shoes/boots/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 6
        },
        //Bags
        {
            url: "http://www.jabong.com/men/bags/travel-bags/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 7
        },
        //Jewellery
        {
            url: "http://www.jabong.com/women/jewellery/?sort=discount&dir=desc",
            selectors: {
                elements: 'section.p-list > ul > li',
                title: 'span.qa-brandTitle',
                description: '',
                imageUrl: 'img.itm-img',
                actualPrice: ' a > span.price > strike',
                sellingPrice: 'a > span.price > strong.qa-price',
                discount: 'a > span.price >span.discount',
                redirectUrl: 'li.added > a'
            },
            isScroll: false,
            id: 12
        }]
};


exports.getVendor = function () {
    return vendor;
};