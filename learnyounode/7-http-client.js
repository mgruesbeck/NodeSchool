var http = require('http');

http.get('http://www.google.com', function callback (response) {
    response.on('data', function (data) {
        console.log(data);
    })
})
