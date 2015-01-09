var http = require('http');
var fs = require('fs');
var static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
	static_contents(request, response); 
})
server.listen(8000);
console.log("Running in localhose at port 8000");

// var http = require('http');
// var fs = require('fs');
// server = http.createServer(function (request, response){
// 	response.writeHead(200, {'Content-type': 'text/html'});
// 	console.log('Request', request.url);
// 		if (request.url === '/') {
// 			fs.readFile('views/index.html', 'utf-8', function (errors, contents){
// 				response.write(contents);
// 				response.end();
// 			});
// 		} else if(request.url === '/dojo.html'){
// 			fs.readFile('views/dojo.html', 'utf-8', function (errors, contents){
// 				response.write(contents);
// 				response.end();
// 			});
// 		} else if (request.url === '/styles/style.css') {
// 			fs.readFile('styles/style.css', function (errors, contents){
// 				response.write(contents);
// 				response.end();
// 			});
// 		} else {
// 			response.end('File not found!!!');
// 		}
// });
// server.listen(8000);
// console.log("Running in localhose at port 8000");