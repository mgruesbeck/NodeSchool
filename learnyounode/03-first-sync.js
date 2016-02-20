var fs = require('fs');

var read = fs.readFileSync(process.argv[2], 'utf8');
console.log(read.split('\n').length - 1);
