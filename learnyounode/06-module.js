var fs   = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err)
        return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })

    callback(null, list)
    })
}

/* second try at task 
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
   */

/* early test linking files
   module.exports = {
   englishHello : function() {
   return('hello');
   },
   spanishHello : function() {
   return('hola');
   }
   }
   */
