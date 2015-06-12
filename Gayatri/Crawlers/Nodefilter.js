var http = require("http");
var rawProducts = [];
http.get('http://localhost:16193/api/productstage/getall', function (item) {
    var data = "";
    item.on("data", function (chunk) {
        data += chunk;
    });

    item.on("data", function () {
        var parsed = JSON.parse(data);
        console.log(parsed.length);
        parsed.forEach(function (item) {
            rawProducts.push({
                "id": item.id,
                "categoryId": item.categoryId,
                "shortDescription": item.shortDescription,
                "description": item.description,
                "redirectUrl": item.redirectUrl,
                "imageUrl": item.imageUrl,
                "storeName": item.storeName,
                "actualPrice": item.actualPrice,
                "currentPrice": item.currentPrice,
                "discountPercentage": item.discountPercentage,
                "isShippingFree": item.isShippingFree,
                "star": item.star,
                "isPublished": item.isPublished,
                "showDate": item.showDate,
                "source": item.source
            });
        });
        console.log(rawProducts);
        console.log(rawProducts.length);
    });
    item.on("end",function(){
        console.log("last");
    });
});
//      item.on("end", function () {
//    rawProducts.forEach(function (item) {
//    processArray.push({
//         "id": item.id,
//         "categoryId": item.categoryId,
//         "shortDescription": item.shortDescription,
//         "description": item.description,
//         "redirectUrl": item.redirectUrl,
//         "imageUrl": item.imageUrl,
//         "storeName": item.storeName,
//         "actualPrice": item.actualPrice,
//         "currentPrice": item.currentPrice,
//         "discountPercentage": item.discountPercentage,
//         "isShippingFree": item.isShippingFree,
//         "star": item.star,
//         "isPublished": item.isPublished,
//         "showDate": item.showDate,
//         "source": item.source,
//         "status": true
//     });
// });
//    console.log(processArray);
//         console.log("ProcessArray length is:  " + processArray.length);
// });

// });
// console.log("hi");
// coping source of truth

         
// //convert into lowercase
// _.forEach(processArray, function (item) {
//     item.name = item.name.toLowerCase();
// });
// console.log(processArray);
// //common keywords array
// commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-"];

// //replace common keywords with nothing 
// for (i = 0; i < processArray.length; i++)
//     for (j = 0; j < commonWords.length; j++)
//         processArray[i].name = processArray[i].name.replace(commonWords[j], "");

// var resultArray = [], filterArray = [], discardedArray = [];
// for (i = 0; i < processArray.length ; i++) {
//     if (processArray[i].status === true) {
//         var a = processArray[i].name.split(" ");
//         for (j = i + 1; j < processArray.length ; j++) {
//             var b = processArray[j].name.split(" ");
//             var c = _.intersection(a, b);
//             var maxn = Math.max(a.length, b.length);
//             var percent = Math.floor(c.length / maxn * 100);
//             if (percent >= 65 && processArray[i].actualPrice === processArray[j].actualPrice) {
//                 filterArray.push(processArray[j]);
//                 discardedArray.push(processArray[j]);
//                 processArray[j].status = false;
//             }
//         }
//         if (filterArray.length > 0) {
//             var maxDiscount = 0;
//             var arrayIndex = 0;
//             filterArray.push(processArray[i]);
//             _.forEach(filterArray, function (s) {
//                 if (this.discount >= maxDiscount) {
//                     maxDiscount = this.discount;
//                     arrayIndex = s;
//                 }
//             });
//             resultArray.push(filterArray[arrayIndex]);
//             filterArray = [];
//         }

//         else {
//             resultArray.push(processArray[i]);
//         }
//     }
// }
// console.log(processArray.length);
// console.log(resultArray.length);
// console.log(resultArray);
// console.log(discardedArray);

