var _ = require('lodash');
var AmazonLinks = [
//AC
{
    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_1_14?url=search-alias%3Dkitchen&field-keywords=air+conditioner&sprefix=air+conditione%2Cstripbooks%2C278&rh=n%3A976442031%2Ck%3Aair+conditioner",
    selectors: {
        elements: 'li[data-asin*="B"]',
        title: 'div.a-row > a',
        description: '',
        imageUrl: 'a > img',
        actualPrice: 'span.a-text-strike',
        sellingPrice: 'a > span',
        discount: 'span.a-size-small.a-color-price',
        redirectUrl: 'div.a-row.a-spacing-none > a'
    },
    isScroll: false,
    id: 8
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976442031%2Ck%3Aair+conditioner&page=2&keywords=air+conditioner&ie=UTF8&qid=1431138179",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 8
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976442031%2Ck%3Aair+conditioner&page=3&keywords=air+conditioner&ie=UTF8&qid=1431138198",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 8
//},
//// Camera 
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_0_6?url=search-alias%3Delectronics&field-keywords=camera&sprefix=camera%2Ccomputers%2C285",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 4
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976419031%2Ck%3Acamera&page=2&keywords=camera&ie=UTF8&qid=1430326873",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 4
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976419031%2Ck%3Acamera&page=3&keywords=camera&ie=UTF8&qid=1430326901",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 4
//},

////Games
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_1_12?url=search-alias%3Dtoys&field-keywords=game+console&sprefix=game+console%2Cundefined%2C347",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 10
//},
//{
//    url: "http://www.amazon.in/s/ref=fj_deals_35?_encoding=UTF8&bbn=1951048031&ie=UTF8&rh=i%3Ajewelry%2Cn%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-10&pf_rd_r=13KR4K91V6QRD4DCPES9&pf_rd_t=101&pf_rd_p=613780627&pf_rd_i=1951048031",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 11
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=2&bbn=1951048031&ie=UTF8&qid=1430911250",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 11
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=3&bbn=1951048031&ie=UTF8&qid=1430911489",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 11
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A1951048031%2Cp_n_pct-off-with-tax%3A2665402031&page=4&bbn=1951048031&ie=UTF8&qid=1430911659",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 11

//},
////Luggage
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_fb_0_8?url=search-alias%3Dluggage&field-keywords=luggage+bag&sprefix=laggage+%2Cstripbooks%2C312&rh=n%3A2454169031%2Ck%3Aluggage+bag",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 7
//},
//    {
//        url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A2454169031%2Ck%3Aluggage+bag&page=2&keywords=luggage+bag&ie=UTF8&qid=1430897733",
//        selectors: {
//            elements: 'li[data-asin*="B"]',
//            title: 'div.a-row > a',
//            description: '',
//            imageUrl: 'a > img',
//            actualPrice: 'span.a-text-strike',
//            sellingPrice: 'a > span',
//            discount: 'span.a-size-small.a-color-price',
//            redirectUrl: 'div.a-row.a-spacing-none > a'
//        },
//        isScroll: false,
//        id: 7
//    },
//    {
//        url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A2454169031%2Ck%3Aluggage+bag&page=3&keywords=luggage+bag&ie=UTF8&qid=1430902330",
//        selectors: {
//            elements: 'li[data-asin*="B"]',
//            title: 'div.a-row > a',
//            description: '',
//            imageUrl: 'a > img',
//            actualPrice: 'span.a-text-strike',
//            sellingPrice: 'a > span',
//            discount: 'span.a-size-small.a-color-price',
//            redirectUrl: 'div.a-row.a-spacing-none > a'
//        },
//        isScroll: false,
//        id: 7
//    },
//    {
//        url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A2454169031%2Ck%3Aluggage+bag&page=4&keywords=luggage+bag&ie=UTF8&qid=1430902371",
//        selectors: {
//            elements: 'li[data-asin*="B"]',
//            title: 'div.a-row > a',
//            description: '',
//            imageUrl: 'a > img',
//            actualPrice: 'span.a-text-strike',
//            sellingPrice: 'a > span',
//            discount: 'span.a-size-small.a-color-price',
//            redirectUrl: 'div.a-row.a-spacing-none > a'
//        },
//        isScroll: false,
//        id: 7
//    },
////Laptop
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_0_6?url=search-alias%3Dcomputers&field-keywords=laptop&sprefix=laptop%2Ccomputers%2C292",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 1
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Ck%3Alaptop&page=2&keywords=laptop&ie=UTF8&qid=1430888955",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 1
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Ck%3Alaptop&page=3&keywords=laptop&ie=UTF8&qid=1430889000",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 1
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976392031%2Ck%3Alaptop&page=4&keywords=laptop&ie=UTF8&qid=1430889030",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 1
//},
////Men Fashion
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_c_0_2?url=search-alias%3Daps&field-keywords=sunglasses&sprefix=su%2Cwatches%2C439",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 6
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?fst=as%3Aon&rh=n%3A1571271031%2Ck%3Asunglasses&page=2&keywords=sunglasses&ie=UTF8&qid=1430968329",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 6
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?fst=as%3Aon&rh=n%3A1571271031%2Ck%3Asunglasses&page=3&keywords=sunglasses&ie=UTF8&qid=1430970366",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 6
//},
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=mens+watches&rh=i%3Aaps%2Ck%3Amens+watches",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 6
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?fst=as%3Aon&rh=k%3Amens+watches%2Cn%3A1350387031%2Cn%3A1375495031&page=2&keywords=mens+watches&ie=UTF8&qid=1430971206",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 6
//},
////Mobiles
//{

//    url: "http://www.amazon.in/s/ref=amb_link_179803727_1?ie=UTF8&bbn=4192584031&rh=i%3Aelectronics%2Cn%3A976419031%2Cn%3A!1499770031%2Cn%3A!1499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031%2Cn%3A!1499772031%2Cn%3A!1499770031%2Cn%3A!1499770031%2Cn%3A!1499772031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-leftnav&pf_rd_r=0PX4ARTQZFAC6778SCX2&pf_rd_t=101&pf_rd_p=613139487&pf_rd_i=1389432031",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 3
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976419031%2Cn%3A%211499770031%2Cn%3A%211499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031&page=2&bbn=4192584031&ie=UTF8&qid=1430886844",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 3
//},
//    //Tablets
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_1?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&bbn=1375458031&ie=UTF8&qid=1430477874",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 2
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=2&bbn=1375458031&ie=UTF8&qid=1426669276",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 2
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=3&bbn=1375458031&ie=UTF8&qid=1430477915",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 2
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=4&bbn=1375458031&ie=UTF8&qid=1430477941",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 2
//},
////TV
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_c_0_2?url=search-alias%3Daps&field-keywords=tv&sprefix=tv%2Caps%2C348",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 5
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?fst=as%3Aon&rh=n%3A976419031%2Cn%3A1389375031%2Cn%3A1389396031%2Ck%3Atv&page=2&keywords=tv&ie=UTF8&qid=1430882098",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 5
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?fst=as%3Aon&rh=n%3A976419031%2Cn%3A1389375031%2Cn%3A1389396031%2Ck%3Atv&page=3&keywords=tv&ie=UTF8&qid=1430885364",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 5
//},
////Toys
//{
//    url: "http://www.amazon.in/s/ref=nb_sb_ss_i_0_4?url=search-alias%3Dtoys&field-keywords=toys&sprefix=toys%2Cstripbooks%2C283",
//    selectors: {
//        elements: 'li[data-asin*="B"]',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 11
//},

//// Books
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976389031%2Ck%3Abooks&page=3&d=1&keywords=books&ie=UTF8&qid=1430913377&lo=none",
//    selectors: {
//        elements: '.s-result-item',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 13
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_4?rh=n%3A976389031%2Ck%3Abooks&page=4&d=1&keywords=books&ie=UTF8&qid=1430913438&lo=none",
//    selectors: {
//        elements: '.s-result-item',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 13
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_il_to_stripbooks?rh=n%3A976389031%2Ck%3Abooks&keywords=books&ie=UTF8&qid=1430912952&lo=none",
//    selectors: {
//        elements: '.s-result-item',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 13
//},
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976389031%2Ck%3Abooks&page=2&d=1&keywords=books&ie=UTF8&qid=1430912969&lo=none",
//    selectors: {
//        elements: '.s-result-item',
//        title: 'div.a-row > a',
//        description: '',
//        imageUrl: 'a > img',
//        actualPrice: 'span.a-text-strike',
//        sellingPrice: 'a > span',
//        discount: 'span.a-size-small.a-color-price',
//        redirectUrl: 'div.a-row.a-spacing-none > a'
//    },
//    isScroll: false,
//    id: 13
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
AmazonLinks.forEach(function (AmazonCrawler) {
    casper.thenOpen(AmazonCrawler.url, function () {
        this.echo("----------------------------------------");
        if (AmazonCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(AmazonCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(AmazonCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(AmazonCrawler.selectors.elements, function () { });
            });
        }
        casper.then(function () {
            var parsedItems = casper.evaluate(function (stubCrawler) {
                var tempProducts = [];
                var parser = document.createElement('a');
                var elements = document.querySelectorAll(stubCrawler.selectors.elements);
                for (var i = 0; i < elements.length; i++) {
                    var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                    var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                    var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                    var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                    var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                    var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                    var fullRedirectUrl = '';

                    var title = titleElement && titleElement.getAttribute('title') || '';
                    var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                    actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                    sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                    var str = discountElement && discountElement.textContent || '';
                    var k = str.split("(");
                    if (k.length > 1) {
                        k[0] = k[0].trim(); k[1] = k[1].trim(); k[1] = k[1].replace(/[^0-9]/g, ''); discount = k[1];
                    }
                    else {
                        k[0] = k[0].trim(); k[0] = k[0].replace(/[^0-9]/g, ''); discount = k[0];
                    }
                    var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                    var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                    if (!redirectUrl.match("^http")) {
                        parser.href = stubCrawler.url;
                        var host = parser.protocol + "//" + parser.hostname;
                        var temp = redirectUrl.match("^/") && redirectUrl || "/" + redirectUrl;
                        fullRedirectUrl = host + temp;
                    }
                    else {
                        fullRedirectUrl = redirectUrl;
                    }
                    if (title && discount && actualPrice && redirectUrl) {
                        __utils__.echo(title);
                        //__utils__.echo(imageUrl);
                        //__utils__.echo(actualPrice);
                        //__utils__.echo(sellingPrice);
                        //__utils__.echo(discount);
                        //__utils__.echo(fullRedirectUrl);
                        tempProducts.push({
                            "id": stubCrawler.id,
                            "title": title,
                            "actualPrice": actualPrice,
                            "sellingPrice": sellingPrice,
                            "discount": discount,
                            "redirectUrl": fullRedirectUrl,
                            "imageUrl": imageUrl
                        });
                    }
                }
                return tempProducts;
            }, AmazonCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});

// pushing items to ProductStage Table.
casper.then(function () {
    //Creating proper input array.
    var productListToPush = productsList.map(function (item) {
        return {

            CategoryId: item.id,
            ShortDescription: item.title,
            Description: item.title,
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "Amazon",
            ActualPrice: item.actualPrice,
            CurrentPrice: item.sellingPrice,
            DiscountPercentage: item.discount,
            IsShippingFree: 1,
            Star: 4,
            IsPublished: 0,
            ShowDate: "1/1/2015",
            Source: "Crawler",
            CreatedDate: "1/1/2015",
            LastUpdateDate: "1/1/2015"
        }
    });
    this.echo("productListToPush  :  " + productListToPush.length);
    var batchSize = 5;
    var pushingArray = [];
    pushingArray = _.chunk(productListToPush, batchSize);
    this.echo(pushingArray.length);

    pushingArray.forEach(function (batchArray) {
        casper.thenOpen('http://localhost:16193/api/productstagebulk', {
            method: 'post',
            data: JSON.stringify(batchArray),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    });
    this.echo("pushed items to productstage table");
});

casper.run();
