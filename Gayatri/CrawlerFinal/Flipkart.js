/*jslint nomen: true, regexp: true, sloppy: true */
/*global define, jQuery, $, document, require, exports, __utils__ */
/* latedef: nofunc*/
/*jshint onevar: true */

var vendor = {
    storeName: 'Flipkart',
    links: [
          //TABLETS
    {
        url: "http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL",
        selectors: {
            elements: 'div[data-pid*="TAB"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 2
    },
    //MOBILES
    {
        url: "http://www.flipkart.com/mobiles/~mobileexclusives/pr?sid=tyy,4io&otracker=nmenu_sub_electronics_0_All%20Exclusive%20Mobiles",
        selectors: {
            elements: 'div[data-pid*="MOB"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 3
    },
    //TV
    {
        url: "http://www.flipkart.com/home-entertainment/televisions/pr?p%5b%5d=sort=featured&sid=ckf,czl&otracker=ch_vn_television_filter_Brands_See%20All%20TVs",
        selectors: {
            elements: 'div[data-pid*="TVS"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 5
    },

    //SUNGLASSES
    {
        url: "http://www.flipkart.com/sunglasses/pr?p[]=facets.ideal_for%255B%255D%3DWomen&p[]=sort%3Dpopularity&sid=26x&facetOrder[]=ideal_for&otracker=clp_sunglasses-women_CategoryLinksModule_0-2_catergorylinks_8_SeeAll",
        selectors: {
            elements: 'div[data-pid*="SGL"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 6
    },
    //  Watches - Men
    {
        url: "http://www.flipkart.com/watches/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=sort%3Dpopularity&sid=r18&facetOrder%5B%5D=ideal_for&otracker=clp_watches-men_CategoryLinksModule_0-2_catergorylinks_0_AllBrands",
        selectors: {
            elements: 'div[data-pid*="WAT"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 6
    },
   // BAG
    {
        url: "http://www.flipkart.com/bags-wallets-belts/luggage-travel/pr?sid=reh%2Cplk&otracker=clp_lifestyle-luggage-travel-accessories_CategoryLinksModule_0-2_catergorylinks_5_ViewAll",
        selectors: {
            elements: 'div[data-pid*="DFB"],div[data-pid*="STC"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 7
    },
     //AIR CONDITONERS
    {
        url: "http://www.flipkart.com/home-kitchen/home-appliances/air-conditioners/pr?q=air+conditioner&as=on&as-show=on&otracker=start&sid=j9e%2Cabm%2Cc54&as-pos=1_1_ic_air",
        selectors: {
            elements: 'div[data-pid*="ACN"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 8
    },
    //WASHING MACHINE
    {
        url: "http://www.flipkart.com/home-kitchen/home-appliances/washing-machines/pr?q=washing+machines&as=on&as-show=on&otracker=start&sid=j9e%2Cabm%2C8qx&as-pos=1_1_ic_washing",
        selectors: {
            elements: 'div[data-pid*="WMN"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 9
    },
    //GAME CONSOLE
    {
        url: "http://www.flipkart.com/gaming-consoles/pr?q=game+console&as=on&as-show=on&otracker=start&sid=4rr%2Cnqk&as-pos=1_1_ic_game+console",
        selectors: {
            elements: 'div[data-pid*="GMC"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 10
    },
    //TOYS
    {
        url: "http://www.flipkart.com/toys/pr?sid=mgl&otracker=clp_toys-toy-store_CategoryLinksModule_0-2_catergorylinks_8_ViewAll",
        selectors: {
            elements: 'div[data-pid*="STF"],div[data-pid*="RCT"],div[data-pid*="PUZ"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 11
    },
    // JWELLERY
    {
        url: "http://www.flipkart.com/search?q=jwellary&as=on&as-show=on&otracker=start&as-pos=1_q_jwe#jumpTo=400|15",
        selectors: {
            elements: 'div[data-pid*="JWS"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 12
    },
    // BOOKS
    {
        url: "http://www.flipkart.com/books/~bestsellers/pr?sid=bks&otracker=clp_books_clp%2FProductsExpand_0-6__viewAll",
        selectors: {
            elements: 'div[data-pid*="978"]',
            title: 'div.pu-title > a',
            description: '',
            imageUrl: 'a.pu-image > img',
            actualPrice: '.pu-old',
            sellingPrice: 'div.pu-final > span',
            discount: 'span.pu-off-per',
            redirectUrl: 'div.pu-title > a'
        },
        isScroll: true,
        id: 13
    }]
};


exports.getVendor = function () {
    return vendor;
};