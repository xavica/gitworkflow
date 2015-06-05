// var http = require("http");

// http.get('http://localhost:16193/api/productstage/getall', function (item) {
//     var data = "";
//     item.on("data", function (chunk) {
//         data += chunk;
//     });

//     item.on("end", function () {
//             console.log(data.length);
//         console.log(data);
    
//     });
// });



// .on('error',function(e){
//    console.log("Error: " + "\n" + e.message); 
//    console.log( e.stack );
// });

var http = require("http");

http.get('http://localhost:16193/api/productstage/getall', function (item) {
    var data = [];
    item.on("data", function (chunk) {
        data.push(chunk);
        console.log(chunk.id);
    });

    item.on("end", function () {
        console.log(data.length);
        // console.log(data.toString());

    });
});