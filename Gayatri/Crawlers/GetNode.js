var http = require("http");
// var data = JSON.stringify({
//   'id': '2'
// });

var options = {
  hostname: 'localhost:16193',
  port: '80',
  path: '/api/products/getall',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Length': data.length
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

// req.write(data);
req.end();