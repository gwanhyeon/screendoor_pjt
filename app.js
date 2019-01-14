var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("서버열려라")
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
});

server.listen(8000);