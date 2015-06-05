var http = require("http");
var rawProducts = [];
http.get('http://localhost:16193/api/productstage/getall', function (item) {
    var data = "";
    item.on("data", function (chunk) {
        data += chunk;
    });

    item.on("end", function () {
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
                "source": parsed.source
            });
        });
        console.log(rawProducts);
        console.log(rawProducts.length);
    });
});

// Mapping array to add "Status" property.
var processArray = rawProducts.map(function (item) {
    return {
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
        "source": parsed.source,
        "status": true
    }
});
//convert into lowercase
_.forEach(processArray, function (item) {
    item.name = item.name.toLowerCase();
});
console.log(processArray);
//common keywords array
commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-"];

//replace common keywords with nothing 
for (i = 0; i < processArray.length; i++)
    for (j = 0; j < commonWords.length; j++)
        processArray[i].name = processArray[i].name.replace(commonWords[j], "");

var resultArray = [], filterArray = [], discardedArray = [];
for (i = 0; i < processArray.length ; i++) {
    if (processArray[i].status === true) {
        var a = processArray[i].name.split(" ");
        for (j = i + 1; j < processArray.length ; j++) {
            var b = processArray[j].name.split(" ");
            var c = _.intersection(a, b);
            var maxn = Math.max(a.length, b.length);
            var percent = Math.floor(c.length / maxn * 100);
            if (percent >= 65 && processArray[i].actualPrice === processArray[j].actualPrice) {
                filterArray.push(processArray[j]);
                discardedArray.push(processArray[j]);
                processArray[j].status = false;
            }
        }
        if (filterArray.length > 0) {
            var maxDiscount = 0;
            var arrayIndex = 0;
            filterArray.push(processArray[i]);
            _.forEach(filterArray, function (s) {
                if (this.discountPercentage >= maxDiscount) {
                    maxDiscount = this.discountPercentage;
                    arrayIndex = s;
                }
            });
            resultArray.push(filterArray[arrayIndex]);
            filterArray = [];
        }

        else {
            resultArray.push(processArray[i]);
        }
    }
}
console.log(processArray.length);
console.log(resultArray.length);
console.log(resultArray);
console.log(discardedArray);

// Posting data to Products Table in DB.

var data = JSON.stringify(resultArray);
var options = {
    host: 'localhost:16193',
    port: '80',
    path: '/api/products',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
    }
};

var req = http.request(options, function (res) {
    var msg = '';

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        msg += chunk;
    });
    res.on('end', function () {
        console.log(JSON.parse(msg));
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});

req.write(data);
req.end();



