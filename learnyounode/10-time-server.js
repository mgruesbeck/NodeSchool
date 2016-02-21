var net = require('net');

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ('0' + currentDate.getMonth()).slice(-2);
var day = ('0' + currentDate.getDay()).slice(-2);
var hour = ('0' + currentDate.getHours()).slice(-2);
var min = ('0' + currentDate.getMinutes()).slice(-2);

var server = net.createServer(function (socket) {
    var formattedDate = year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n';
    socket.write(formattedDate)
    socket.end()
})
server.listen(process.argv[2]);
