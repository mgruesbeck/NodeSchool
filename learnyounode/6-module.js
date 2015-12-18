var fs   = require('fs');
var path = require('path');

module.exports = function(dirPath, filterString, callback) {
    fs.readdir(dirPath, function (err, data) {
        if(err) {
            return callback(err);
        }
        data.forEach(function (file) {
            if (path.extname(file) === '.' + filterString) {
                callback(null, file);
            }
        })
    })
}

/*
module.exports = {
    englishHello : function() {
        return('hello');
    },
    spanishHello : function() {
        return('hola');
    }
}
*/
