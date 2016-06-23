var http = require("http")

var localhost = 'http://127.0.0.1'
var port = 8081
var responseCode = 200

http.createServer(function (request, response) {
  response.writeHead(responseCode, {'Content-Type': 'text/plain'})

  console.log('Request received.')

  response.end('Hello, World!')
}).listen(port)

console.log('Server running at ' + localhost + ':' + port)
