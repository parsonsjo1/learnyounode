var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback) {
	fs.readdir(dirName, function(err, list) {
		if(err) {
			console.log("error");
			return callback(err);
		}

		let results = [];
		list.forEach(function(item) {
			let ext = path.extname(item);

			ext = ext.slice(1, ext.length);
			if(ext === fileExt) {
				results.push(item);
			}
		});
		return callback(null, results);
	});
};

