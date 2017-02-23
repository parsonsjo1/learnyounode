var net = require('net');

var port = process.argv[2];

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

if( month < 10) {
	month = '0' + month;
}

if( day < 10) {
	day = '0' + day;
}

var data = date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes();

var server = net.createServer(function(socket) {
	socket.end(data + "\n");
});

server.listen(port);