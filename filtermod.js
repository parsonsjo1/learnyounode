var filter = require('./mod.js');

var directory = process.argv[2];
var fileExt = process.argv[3];

filter(directory, fileExt, function(error, data) {
	if(error) {
		console.log("error");
		return;
	}

	data.forEach(function(fileName) {
		console.log(fileName);
	});

});