var http = require('http');
var map = require('through2-map');
var cat = require('concat-stream');

var port = process.argv[2];

var server = http.createServer(function(request, response) {

	if(request['method'] != 'POST') {
		return response.end("Post requests only");
	}

	response.writeHead(200, {'content-type': 'text/plain'});

	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(port);