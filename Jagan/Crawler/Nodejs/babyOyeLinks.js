var BabyOyeLinks = [
// kids Games
{
    url: "http://www.babyoye.com/d/Toys/~pg=100-224999/~ageGroup=2-3%20years/~ageGroup=3-4%20years/~ageGroup=4-5%20years/~ageGroup=5-6%20years/~ageGroup=6-7%20years/~ageGroup=7-8%20years/~ageGroup=8-9%20years/~eoos=true/~SORT_BY=discountpercent??aff_id=103&utm_source=google&utm_medium=cpc&utm_campaign=Kids-Toys(BMM)&utm_term=keyword&utm_content=creative&gclid=CjwKEAjwndqrBRC16IyeqPicp3ASJAB-vB-c_2YBSXz1lUD-a8uuH_ijAevdmxcrSSRvt4VZ_UgGzxoCz2Dw_wcB",
    selectors: {
        elements: '.product_summary',
        title: '.product_summary .big_prodetail_tab span',
        description: '',
        imageUrl: 'div.gal_img > a > img',
        actualPrice: '.big_prodetail_tab_discount span.strikePrice',
        sellingPrice: '.big_prodetail_tab_discount p',
        discount: '.offBg span.number',
        redirectUrl: 'div.big_prodetail_tab > a'
    },
    isScroll: false,
    id: 11
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
BabyOyeLinks.forEach(function (BabyOyeCrawler) {
    casper.thenOpen(BabyOyeCrawler.url, function () {
        this.echo("----------------------------------------");
        if (BabyOyeCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(BabyOyeCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(BabyOyeCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(BabyOyeCrawler.selectors.elements, function () { });
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

                    var title = titleElement && titleElement.getAttribute('title') || titleElement.innerText || '';
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
                        __utils__.echo(actualPrice);
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
            }, BabyOyeCrawler);
            if (parsedItems) {
                for (var i = 0; i < parsedItems.length; i++) {
                    productsList.push(parsedItems[i]);
                }
            }
        });
    });
});
// pushing BabyOye items to ProductStage Table.
casper.then(function () {
    this.echo(productsList.length);
    productsList.forEach(function (item) {
        casper.thenOpen('http://localhost:16193/api/productstage', {
            method: 'post',
            data: {
                CategoryId: item.id,
                ShortDescription: item.title,
                Description: "Description",
                RedirectUrl: item.redirectUrl,
                ImageUrl: item.imageUrl,
                StoreName: "BabyOye",
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

    });
    this.echo("pushed  BabyOyeSite items to productstage table");
});
////Getting products from ProductStageTable

casper.run();