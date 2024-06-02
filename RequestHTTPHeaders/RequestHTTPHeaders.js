const http = require('http');
const url = require('url') ;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(req.headers));
}).listen(1400);