const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

console.log("Server running on http://localhost:8080");
const myModule = require('./my-module.js');

console.log(myModule.myFunction());