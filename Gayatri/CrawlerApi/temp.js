var data = JSON.stringify({

    "id": 1968,
    "categoryId": 7,
    "shortDescription": "Voltas 185Cya 1.5 Ton 5 Star Split AC (White) ",
    "description": "Description",
    "redirectUrl": "http://www.flipkart.com/voltas-185cya-1-5-ton-5-star-split-ac/p/itmdvrkcmsdyxmfe?pid=ACNDVRJFG5CBXQTZ&ref=L%3A-5878754836551416470&srno=p_1&query=air+conditioner&otracker=from-search",
    "imageUrl": "http://img6a.flixcart.com/image/air-conditioner-new/q/t/z/1-5-voltas-split-185cya-200x200-imae4g2cggpmghgy.jpeg",
    "storeName": "Flipkart",
    "actualPrice": 45590.0,
    "currentPrice": 31990.0,
    "discountPercentage": 29.0,
    "isShippingFree": 1,
    "star": 4,
    "isPublished": 0,
    "showDate": "2015-01-01T00:00:00",
    "source": "Crawler"

});

var options = {
    host: 'localhost:16193',
    port: '80',
    path: '/api/products',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
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