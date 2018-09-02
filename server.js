//Lets require/import the HTTP module
var http = require('http');

//Lets define one port per each server we want to listen to
var PORT1=7000;
var PORT2=7500;

//We need separate function to handle requests and send response per each PORT server.
// kp note that response.end may seem similar with console.log but
// kp it's printing to the DOM instead of hidden in console.
// kp make separate handleRequest function for each PORT server.
function handleRequest1(request, response){
    response.end('It Works!! Path1 Hit: ' + request.url);
}

function handleRequest2(request, response){
    response.end('It Works!! Path2 Hit: ' + request.url);
}


//Create a server for each PORT
// kp notice the use of the HTTP module, createServer method, and handleRequest function.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Lets start our servers
server1.listen(PORT1, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});