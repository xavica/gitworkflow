var fashionLinks = [
  //  sunGlasses -Men
//{
//    url: "http://www.flipkart.com/sunglasses/pr?p[]=facets.ideal_for%255B%255D%3DWomen&p[]=sort%3Dpopularity&sid=26x&facetOrder[]=ideal_for&otracker=clp_sunglasses-women_CategoryLinksModule_0-2_catergorylinks_8_SeeAll",
//    selectors: {
//        elements: 'div[data-pid*="SGL"]',
//        title: 'div.pu-title > a',
//        description: '',
//        imageUrl: 'a.pu-image > img',
//        actualPrice: '.pu-old',
//        sellingPrice: 'div.pu-final > span',
//        discount: 'span.pu-off-per',
//        redirectUrl: 'div.pu-title > a'
//    },
//    isScroll: true
//},
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
//    isScroll: false
//},
//Not working
//{
//    url: "http://www.amazon.in/s/ref=sr_pg_2?fst=as%3Aon&rh=n%3A1571271031%2Ck%3Asunglasses&page=2&keywords=sunglasses&ie=UTF8&qid=1430968329",
//   selectors: {
//            elements: 'li[data-asin*="B"]',
//            title: 'div.a-row > a',
//            description: '',
//            imageUrl: 'a > img',
//            actualPrice: 'span.a-text-strike',
//            sellingPrice: 'a > span',
//            discount: 'span.a-size-small.a-color-price',
//            redirectUrl: 'div.a-row.a-spacing-none > a'
//            },
//            isScroll: false
//},
//not wrking
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
//    isScroll: false
//},
////  Watches - Men
//{
//    url: "http://www.flipkart.com/watches/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=sort%3Dpopularity&sid=r18&facetOrder%5B%5D=ideal_for&otracker=clp_watches-men_CategoryLinksModule_0-2_catergorylinks_0_AllBrands",
//    selectors: {
//        elements: 'div[data-pid*="WAT"]',
//        title: 'div.pu-title > a',
//        description: '',
//        imageUrl: 'a.pu-image > img',
//        actualPrice: '.pu-old',
//        sellingPrice: 'div.pu-final > span',
//        discount: 'span.pu-off-per',
//        redirectUrl: 'div.pu-title > a'
//    },
//    isScroll: true
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
//    isScroll: false
    //},
    //not wrking
     {
         url: "http://www.amazon.in/s/ref=sr_pg_2?fst=as%3Aon&rh=k%3Amens+watches%2Cn%3A1350387031%2Cn%3A1375495031&page=2&keywords=mens+watches&ie=UTF8&qid=1430971206",
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
         isScroll: false

     }];
var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
fashionLinks.forEach(function (fashionCrawler) {
    casper.thenOpen(fashionCrawler.url, function () {
        this.echo("----------------------------------------");
        var parsedItems = casper.evaluate(function (stubCrawler) {
            var tempProducts = [];
            var parser = document.createElement('a');
            var elements = document.querySelectorAll(stubCrawler.selectors.elements);
            for (var i = 0; i < elements.length; i++) {

                //var titleElement = elements[i].querySelector(stubCrawler.selectors.title);
                //var actualPriceElement = elements[i].querySelector(stubCrawler.selectors.actualPrice);
                //var sellingPriceElement = elements[i].querySelector(stubCrawler.selectors.sellingPrice);
                var discountElement = elements[i].querySelector(stubCrawler.selectors.discount);
                //var redirectUrlElement = elements[i].querySelector(stubCrawler.selectors.redirectUrl);
                //var imageUrlElement = elements[i].querySelector(stubCrawler.selectors.imageUrl);
                //var fullRedirectUrl = '';

                //var title = titleElement && titleElement.getAttribute('title') || '';
                //var actualPrice = actualPriceElement && actualPriceElement.innerText || '';
                //actualPrice = actualPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                //var sellingPrice = sellingPriceElement && sellingPriceElement.innerText || '';
                //sellingPrice = sellingPrice.replace('Rs.', '').replace(/[^0-9.]/g, '') || 0;
                var str = discountElement && discountElement.textContent || '';
                var discount = 0;
                __utils__.echo(str);
                var k = str.split("(");
                //if (k.length > 1) {
                //    k[0] = k[0].trim(); k[1] = k[1].trim(); k[1] = k[1].replace(/[^0-9]/g, ''); discount = k[1];
                //}
                //else {
                //    k[0] = k[0].trim(); k[0] = k[0].replace(/[^0-9]/g, ''); discount = k[0];
                //}
                //var redirectUrl = redirectUrlElement && redirectUrlElement.getAttribute('href') || '';
                //var imageUrl = imageUrlElement && imageUrlElement.getAttribute('src') || '';

                //if (!redirectUrl.match("^http")) {
                //    parser.href = stubCrawler.url;
                //    var host = parser.protocol + "//" + parser.hostname;
                //    var temp = redirectUrl.match("^/") && redirectUrl || "/" + redirectUrl;
                //    fullRedirectUrl = host + temp;
                //}
                //else {
                //    fullRedirectUrl = redirectUrl;
                //}
                //if (title && discount && actualPrice && redirectUrl) {
                //__utils__.echo(title);
                //__utils__.echo(imageUrl);
                //__utils__.echo(actualPrice);
                //__utils__.echo(sellingPrice);
                //__utils__.echo(discount);
                //__utils__.echo(fullRedirectUrl);
                tempProducts.push({
                    //"title": title,
                    //"actualPrice": actualPrice,
                    //"sellingPrice": sellingPrice,
                    "discount": discount
                    //"redirectUrl": fullRedirectUrl,
                    //"imageUrl": imageUrl
                });
            }
            //}
            return tempProducts;
        }, fashionCrawler);
        if (parsedItems) {
            for (var i = 0; i < parsedItems.length; i++) {
                productsList.push(parsedItems[i]);
            }
        }
    });
});

casper.then(function () {

    //Apply filter logic
})
casper.then(function () {
    this.echo(productsList.length);
    //apply ranking logic
})
casper.then(function () {
    this.echo(productsList.length);
    //Then push to server
})
casper.run();