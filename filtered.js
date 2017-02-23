var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(directory, function(err, list) {
	if(err) {
		console.log("error");
		return;
	}

	list.forEach(function(item) {
		let ext = path.extname(item);
		ext = ext.slice(1, ext.length);
		if(ext === fileExt) {
			console.log(item);
		}

	});

});