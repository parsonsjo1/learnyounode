var http = require('http');
var cat = require('concat-stream');

var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(cat(function(data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}));

}); 