/*
   1. servers json when '/api/parsetime' path receives get request
   2. request has string with 'iso' key /api/parsetime?iso=2013-08-10T12:10:15.474Z
   3. json response should only have hour, minute, second
   4. add '/api/unixtime' which is same as #3 + milliseconds
   5. server to listen on first argument
*/

var http = require('http');
var url = require('url');

var currentDate = new Date();

server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // include time contents 
    // set url endpoint
    // JSON stringify
    res.end('done');
});
server.listen(process.argv[2]);
console.log(currentDate);
