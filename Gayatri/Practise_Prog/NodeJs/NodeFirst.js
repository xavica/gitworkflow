var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("hello world");
	response.end();
}).listen(8080);
console.log("listening to port 8080");