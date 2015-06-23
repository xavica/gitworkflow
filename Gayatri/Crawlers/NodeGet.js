var request = require("request");
var _ = require('lodash-node');

var productData = 
   { "CategoryId": "9",
    "ShortDescription": "New Insert",
    "Description": "Description",
    "RedirectUrl": "RedirectUrl",
    "ImageUrl": "ImageUrl",
    "StoreName": "StoreName",
    "ActualPrice": "0.00",
    "CurrentPrice": "0.00",
    "DiscountPercentage": "10.00",
    "IsShippingFree": "0",
    "Star": "0",
    "IsPublished": "0",
    "ShowDate": "2015-05-02",
    "Source": "Source" 
  }
var options = {
    method: 'POST',
    url: "http://localhost:16193/api/products",
    headers: {
        'Content-Type': 'application/json'
    },
    json: productData

};


function callback(error, response, body) {
    if (!error) {
        console.log(response.statusCode);
        console.log(body);
    }
    else {
        console.log('Error happened: ' + error);
    }
}
request(options, callback);


// var getOptions = {
//     method: 'GET',
//     url: "http://localhost:16193/api/products/getall",
//     headers: {
//         'Content-Type': 'application/json'
//     },
// };
// var rawProducts = [];
// request(getOptions, function (error, response, body) {
//     var parsed = JSON.parse(body);
//     console.log(parsed.length);
//     parsed.forEach(function (item) {
//         rawProducts.push({
//             "id": item.id,
//             "categoryId": item.categoryId,
//             "shortDescription": item.shortDescription,
//             "description": item.description,
//             "redirectUrl": item.redirectUrl,
//             "imageUrl": item.imageUrl,
//             "storeName": item.storeName,
//             "actualPrice": item.actualPrice,
//             "currentPrice": item.currentPrice,
//             "discountPercentage": item.discountPercentage,
//             "isShippingFree": item.isShippingFree,
//             "star": item.star,
//             "isPublished": item.isPublished,
//             "showDate": item.showDate,
//             "source": item.source
//         });
//     });
//     console.log(rawProducts);
//     console.log(rawProducts.length);
// });

