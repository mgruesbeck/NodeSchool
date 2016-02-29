var through = require('through2');

var stream = through(write, end) {
    function write (buffer, encoding, next) {
    }
    function end () {
    }
};

process.stdin.pipe(process.stdout);
