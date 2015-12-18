var fs   = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file);
    })
})

/*
fs.readdir(process.argv[2], function callback (err, list) {
    if (err) throw err;
    for (i=0;i<list.length;i++) {
        if (list[i].split('.')[1] === 'md'){
            console.log(list[i]);
        }
    }
});
*/
