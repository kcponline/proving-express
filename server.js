//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');

//The url library allows us to parse parts of the request url.
var url = require('url');

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
// kp note that response.end may seem similar with console.log but
// kp it's printing to the DOM instead of hidden in console
function handleRequest(req, res){

  // Capturing the url the request is made to.
  var url_parts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/edit':
    // nodejs' equivalent to console.log but it didn't work... maybe because express server is not installed?
      sys.puts("display edit");
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

// When we visit the 'http://localhost:8080/' path, this function is run.
// kp - this simulates a webpage content
function display_root(url, req, res) {

  fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });

}

// When we visit any path that is not specifically defined, this function is run.
function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

//Create a server
// kp notice the use of the HTTP module, createServer method, and handleRequest function.
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});