'use strict';

var level = require('level'),
    db = level(process.argv[2]);

db.get(key, function (err, value) {
    if (err) return console.log(err)
    console.log(key + '=' + value)
})
