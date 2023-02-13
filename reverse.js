let fs = require('fs');
let readStream = fs.createReadStream('./read.txt');
readStream.on('open',function(){
    console.log('This file is open');
});
readStream.on('data', function(chunk){
    console.log(chunk.toString());
});
