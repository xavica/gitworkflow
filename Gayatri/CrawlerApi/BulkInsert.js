//var productsList =[
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 1",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 2",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 1",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 2",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 1",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 2",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 1",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  },
//  {
//      "categoryId": 1,
//      "shortDescription": "New Insert Bulk 2",
//      "description": "Description",
//      "redirectUrl": "RedirectUrl",
//      "imageUrl": "ImageUrl",
//      "storeName": "StoreName",
//      "actualPrice": 0.0,
//      "currentPrice": 0.0,
//      "discountPercentage": 10.0,
//      "isShippingFree": 0,
//      "star": 0,
//      "isPublished": 0,
//      "showDate": "2015-05-02T00:00:00",
//      "source": "Source"
//  }];

//var casper = require('casper').create();
//casper.start();
//casper.then(function () {
//    productsList = JSON.stringify(productsList);
//    productsList.forEach(function (item) {
//        casper.thenOpen('http://localhost:16193/api/productstage', {
//            method: 'post',
//            data: {
//                CategoryId: item.CategoryId,
//                ShortDescription: item.ShortDescription,
//                Description: "Description",
//                RedirectUrl: item.redirectUrl,
//                ImageUrl: item.imageUrl,
//                StoreName: "Flipkart",
//                ActualPrice: item.actualPrice,
//                CurrentPrice: item.sellingPrice,
//                DiscountPercentage: item.discount,
//                IsShippingFree: 1,
//                Star: 4,
//                IsPublished: 0,
//                ShowDate: "1/1/2015",
//                Source: "Crawler",
//                CreatedDate: "1/1/2015",
//                LastUpdateDate: "1/1/2015"
//            }
//        });
//    });
//    this.echo("pushed  Flipkart items to productstage table");
//});


//casper.run();

