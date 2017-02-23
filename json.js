var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
	if(request['method'] != 'GET') {
		return response.end("Server only accepts GET requests");
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });

	var requestUrl = url.parse(request.url, true);
	var query = requestUrl.query;
	var pathname = requestUrl.pathname;
	var path = requestUrl.path;
	var value = query['iso'];

	if(pathname === '/api/parsetime') {
		var date = new Date(value);
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var data = JSON.stringify({'hour': hour, 'minute': minute, 'second': second});
		response.end(data);
	}

	if(pathname === '/api/unixtime') {
		var date = new Date(value);
		var data = JSON.stringify({'unixtime': date.getTime()});
		response.end(data);
	}



}).listen(process.argv[2]);