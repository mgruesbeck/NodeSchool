var test = require('tape');
var rcb = require(process.argv[2]);

test('nextTick', function (t) {
    t.plan(1)
    process.nextTick(function () {
        t.pass('callback called') 
    })
})
