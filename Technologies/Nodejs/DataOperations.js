var request = require("request");
//*************************************************************************************************************************
//Begin post: to insert records
var productData = {
    "CategoryId": "1",
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
};
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
    }
    else {
        console.log('Error happened: ' + error);
    }
}

request(options, callback);
//End post: to insert records
//*************************************************************************************************************************
//Begin Get: to get records
var getOptions = {
    method: 'GET',
    url: "http://localhost:16193/api/products/getall",
    headers: {
        'Content-Type': 'application/json'
    },
    json: productData

};
//request(getOptions, function (error, response, body) {
//    var products = JSON.parse(JSON.stringify(body));
//    console.log(response.statusCode);
//    console.log(products);
//    console.log(products.length);
//});

//End Get: to get records
//*************************************************************************************************************************
//Begin post to get records (parse search parameters)
var getWhereOptions = {
    method: 'POST',
    url: "http://localhost:16193/api/products/getlist",
    headers: {
        'Content-Type': 'application/json'
    },
    json: {
        "PageNumber": 1,
        "PageSize": 2,
        "Filters": [
             {
                 "ModelFieldName": "Id",
                 "FieldValue": "1311",
                 "Operation": "5",
                 "SortBy": "0",
                 "NextFieldConditional": "0"
             }
        ]
    }

};
request(getWhereOptions, function (error, response, body) {
    var products = JSON.parse(JSON.stringify(body));
    console.log(response.statusCode);
    console.log(products);
    console.log(products.length);
});
//End Post: to get records (parse search parameters)
//*************************************************************************************************************************
//Begin Put: to update records (parse search parameters)
var updateOptions = {
    method: 'PUT',
    url: "http://localhost:16193/api/products/1311",
    headers: {
        'Content-Type': 'application/json'
    },
    json: {
        "CategoryId": "1",
        "ShortDescription": "New Update Nodejs",
        "Description": "Node js Description ",
        "RedirectUrl": "RedirectUrl",
        "ImageUrl": "ImageUrl",
        "StoreName": " Node JS StoreName",
        "ActualPrice": "0.00",
        "CurrentPrice": "0.00",
        "DiscountPercentage": "10.00",
        "IsShippingFree": "0",
        "Star": "0",
        "IsPublished": "0",
        "ShowDate": "2015-05-02",
        "Source": "Source"
    }
};
//request(updateOptions, function (error, response, body) {
//    //var products = JSON.parse(JSON.stringify(body));
//    console.log(response.statusCode);
//});
//End Put: to update records (parse search parameters)
//*************************************************************************************************************************
//Begin Delete: to delete record. (parse search parameters)
var deleteOptions = {
    method: 'DELETE',
    url: "http://localhost:16193/api/products/1314",
    headers: {
        'Content-Type': 'application/json'
    }
};
//request(deleteOptions, function (error, response, body) {
//    //var products = JSON.parse(JSON.stringify(body));
//    console.log(response.statusCode);
//    console.log('data deleted');
//});

//End Delete: to delete record. (parse search parameters)
//*************************************************************************************************************************
