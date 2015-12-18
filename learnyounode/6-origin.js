var module = require('./6-module.js');
module(process.argv[2], process.argv[3], function(err, data){ 
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});


/*
console.log(module.englishHello());
console.log(module.spanishHello());
*/
