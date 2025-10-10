const fs = require('fs');
let streamin = fs.createReadStream('encodingfs.js', 'utf8');
let streamout = fs.createWriteStream('stream.js', 'utf8');
streamin.pipe(streamout);
streamin.on('data',function(data){
    console.log('transferred: %d',data.length);
});
streamin.on('end',function(){
    console.log('finished');
});
streamin.on('error',function(){
    console.log('error copying');
})
