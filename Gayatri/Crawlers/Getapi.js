var http = require('http');
var products = [];

http.get( 'localhost:16193/api/products/getall', function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = JSON.parse(body);
            products.push({
                
                        "id": parsed.id,
                        "categoryId": parsed.categoryId,
                        "shortDescription": parsed.shortDescription,
                        "description": parsed.description,
                        "redirectUrl": parsed.redirectUrl,
                        "imageUrl": parsed.imageUrl,
                        "storeName": parsed.storeName,
                        "actualPrice": parsed.actualPrice,
                        "currentPrice": parsed.currentPrice,
                        "discountPercentage": parsed.discountPercentage,
                        "isShippingFree": parsed.isShippingFree,
                        "star": parsed.star,
                        "isPublished": parsed.isPublished,
                        "showDate": parsed.showDate,
                        "source": parsed.source
            });
        });
    }).on('error', function(e) {
  console.log("Got error: " + e.message);
});

console.log(products.toString());