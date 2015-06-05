var http = require('http');
// http.get("http://localhost:16193/api/productstage/getall", function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });

var data = JSON.stringify({
  'id': '2'
});

var options = {
  host: 'localhost:16193',
  port: '80',
  path: '/api/products/getall',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

var req = http.request(options, function(res) {
  var msg = '';

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    msg += chunk;
  });
 
  res.on('end', function() {
    console.log(JSON.parse(msg));
  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

req.write(data);
req.end();

// callback = function(response) {

//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   response.on('end', function () {
//     console.log(req.data);
//     console.log(str);
//     // your code here if you want to use the results !
//   });
// }
// var options = {
//   host: 'localhost:16193',
//   port: '80',
//   path: 'http://localhost:16193/api/products/getall',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8',
//     // 'Content-Length': data.length
//   }
// };

// var req = http.request(options, callback).end();

// var options = {
//   host: 'localhost:16193',
//   port: 80,
//   path: '/api/products/getall'
// };

// http.get(options, function(res) {
//   console.log("Got response: " + res.statusCode);

//   res.on("data", function(chunk) {
//     console.log("BODY: " + chunk);
//   });
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });