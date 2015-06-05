var http = require("http");

var options = {
  host: 'localhost:16193',
  path: 'localhost:16193/api/products/getall',
}

http.get(options, function (http_res) {
    // initialize the container for our data
    var data = "";

    // this event fires many times, each time collecting another piece of the response
    http_res.on("data", function (chunk) {
        // append this chunk to our growing `data` var
        data += chunk;
    });

    // this event fires *one* time, after all the `data` events/chunks have been gathered
    http_res.on("end", function () {
        // you can use res.send instead of console.log to output via express
        console.log(data);
    });
}).on('error',function(e){
   console.log("Error: " + "\n" + e.message); 
   console.log( e.stack );
});