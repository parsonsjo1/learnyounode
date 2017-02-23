var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, bufferString) {
	if(error) {
		console.log("error");
	}else {
		let numberOfNewLines = bufferString.split('\n').length - 1;
		console.log(numberOfNewLines);
	}
});

