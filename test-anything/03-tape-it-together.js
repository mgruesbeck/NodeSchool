// npm install tape
// read tape docs and TAP wiki
var test = require('tape');
var fancify = require(process.argv[2]);

test('checks three fancy options', function (t) {
    t.ok(fancify('Hello'), 'should return: ~*~Hello~*~')
    t.end()
})
