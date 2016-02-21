// 1. Server text file on each request
// 2. Listen on port provided by process.argv[2]
// 3. Steam files provided by process.argv[3]

var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(Number(process.argv[2]));

