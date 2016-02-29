http = require('http');

http.createServer(function (req, res) {
    var url = require('url');
    var query = url.parse(req.url, true);
    var path = query['pathname'].split('/');
    var date = new Date(query.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(path[2] == 'parsetime') {
        var parsetime = { 
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.write(JSON.stringify(parsetime));
        res.end();
    } 
    else if(path[2] == 'unixtime') {  
        var unixtime = { 
            unixtime: date.getTime() 
        };    
        res.write(JSON.stringify(unixtime));
        res.end();
    } 
    else {
        res.end("error");
    }
}).listen(process.argv[2]);
