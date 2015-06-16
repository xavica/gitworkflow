var _ = require('lodash');
var bagItTodayLinks = [
// LAPTOPS
{
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
    //TABLETS
    {
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
    //SUNGLASSES
    {
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
    //WATCHES
{
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
}];

var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start();
var productsList = [];
bagItTodayLinks.forEach(function (bagItTodayCrawler) {
    casper.thenOpen(bagItTodayCrawler.url, function () {
        this.echo("----------------------------------------");
        if (bagItTodayCrawler.isScroll === true) {
            this.scrollToBottom();
            casper.waitForSelectorTextChange(bagItTodayCrawler.selectors.elements, function () { });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(bagItTodayCrawler.selectors.elements, function () { });
            });
            casper.then(function () {
                this.scrollToBottom();
                casper.waitForSelectorTextChange(bagItTodayCrawler.selectors.elements, function () { });
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
            }, bagItTodayCrawler);
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
            Description: "Description",
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "BagItToday",
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