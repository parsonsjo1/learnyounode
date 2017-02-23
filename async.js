var http = require('http');
var cat = require('concat-stream');
var urls = 	[
				process.argv[2],
				process.argv[3],
				process.argv[4]
			]

var map = new Map();

urls.forEach(function(url, index) {
	http.get(url, function(response) {
		response.pipe(cat(function(data) {
			map.set('url' + (index+1), data.toString());
			printMap();
		}));
	});	
});

var printMap = function() {
	if(map.size > 2) {	
		console.log(map.get('url1'));
		console.log(map.get('url2'));
		console.log(map.get('url3'));
	}
}