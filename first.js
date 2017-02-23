var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var bufferString = buffer.toString();

var numberOfNewLines = bufferString.split('\n').length - 1;

console.log(numberOfNewLines);