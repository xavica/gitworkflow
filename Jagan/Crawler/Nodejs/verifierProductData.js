
var request = require("request");
var _ = require('lodash-node');
var http = require("http");
var productDataReady = {
    method: 'GET',
    url: "http://localhost:16193/api/products/getall",
    headers: {
        'Content-Type': 'application/json'
    },
};
var rawProducts = [];
request(productDataReady, function (error, response, body) {
    var parsed = JSON.parse(body);
    parsed.forEach(function (productItem) {
        rawProducts.push({
            "categoryId": productItem.categoryId,
            "shortDescription": productItem.shortDescription,
            "redirectUrl": productItem.redirectUrl,
            "discountPercentage": productItem.discountPercentage
        });
    });
    //console.log(response.statusCode);
    //console.log(rawProducts);
    //console.log(rawProducts.length);
    var temp = 0;
    _.each(rawProducts, function (redirection) {
        http.get(redirection.redirectUrl, function (response, temp) {
          //  console.log("Response Code" + response.statusCode);
        });
    });
    //   console.log("Got response: " + response.statusCode);
    var finalFilteredProducts = _.filter(rawProducts, function (productSearch) {
        http.get(productSearch.redirectUrl, function (response, temp) {
            //   console.log("Got response: " + response.statusCode);
            if (response.statusCode == 200) {
                temp = 20;
            }
        });
        return temp = 20;
    });
    // console.log(finalFilteredProducts);
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tempProducts = [{
    id: "1",
    redirectUrl: "http://www.flipkart.com/mi-4/p/itme3jfejqvgb4gw?pid=MOBE3JFC9UAFZ3QH&ref=L%3A-8372933336737496523&srno=b_2&findingMethod=hp_nmenu"
},
{
    id: "2",
    redirectUrl: "http://www.flipkart.com/redmi-note-4g/p/itme2gh3fwkn3v5a?pid=MOBE2GH2H84DCY8H&ref=L%3A-8372933336737496523&srno=b_1&findingMethod=hp_nmenu"
},
{
    id: "3",
    redirectUrl: "http://www.flipkart.com/redmi-1s/p/itmdz6zpuatkgfjp?pid=MOBDZ6Y3CK65QFZY&ref=L%3A-8372933336737496523&srno=b_4&findingMethod=hp_nmenu"
},
{
    id: "4",
    redirectUrl: "http://www.flipkart.com/globalite-speedster-corporate-casuals/p/itmds3a99chs59bh?pid=SHODS3A22SB7NTZU&ref=L%3A6525989553863806547&srno=b_2&findingMethod=Menu"
},
{
    id: "5",
    redirectUrl: "http://www.flipkart.com/reebok-npc-court-india-lp-canvas-shoes/p/itme5e6fmwybsany?pid=SHOE46TWXNFNR5MS&ref=L%3A6525989553863806547&srno=b_5&findingMethod=Menu"
}, {
    id: "6",
    redirectUrl: "enu"
}];
var temp;
var tempFilteredProducts = _.filter(tempProducts, function (productItem) {
    console.log("id" + productItem.id);
    http.get(productItem.redirectUrl, function (response) {
        console.log("Got response: " + response.statusCode);
        if (response.statusCode === 302)
            temp = 20;
    });
    return temp = 20;
});