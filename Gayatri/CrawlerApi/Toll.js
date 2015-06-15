var request = require("request");
var _ = require('lodash-node');
var querystring = require('querystring');

// Reteving the productstage table data.
var getOptions = {
    method: 'GET',
    url: "http://localhost:16193/api/productstage/getall",
    headers: {
        'Content-Type': 'application/json'
    },
};
var parsed = [];
request(getOptions, function (error, response, body) {
    parsed = JSON.parse(body);
    console.log(parsed.length);
    //// Converting JSON data into our array objects.
    parsed.forEach(function (item) {
                item.isPublished = false;
    });

});
parsed.forEach(function (verifierProduct) {
    var getOptions = {
        method: 'GET',
        url: verifierProduct.redirectUrl,
        headers: {
            'Content-Type': 'application/json'
        },

    };
    var i = 0;
    console.log(verifierProduct.redirectUrl);
    request(getOptions, function (error, response, body) {
        console.log("reponseCode:  " + response.statusCode);
        if (response.statusCode != 400) {
            verifierProduct.isPublished = body.indexOf(verifierProduct.shortDescription) > -1 && body.indexOf(verifierProduct.discount) > -1 && body.indexOf(verifierProduct.actualPrice) > -1 && body.indexOf(verifierProduct.sellingPrice) > -1;
            console.log("true, iteration:" + i++);
        }
    });
});
//console.log(verifierArray);
console.log(parsed.length);


