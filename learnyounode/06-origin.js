var filterFn = require('./6-module.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err)
    return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})

/* second try at task
   module(process.argv[2], process.argv[3], function(err, data){ 
   if(err){
   console.log(err);
   } else {
   console.log(data);
   }
   });


/* early test linking files
console.log(module.englishHello());
console.log(module.spanishHello());
*/
