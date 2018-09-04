//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
// kp note that response.end may seem similar with console.log but
// kp it's printing to the DOM instead of hidden in console
function handleRequest(req, res){
	
	fs.readFile("index.html", function(err, data){
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.end(data);
	});

};

//Create a server
// kp notice the use of the HTTP module, createServer method, and handleRequest function.
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});