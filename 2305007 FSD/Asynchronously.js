/*Asynchronously reading a file using a callback function*/
var fs = require('fs');
fs.readFile('encodingfs.js','utf8',function(error,data){
    if (error){
        return console.error(error);
    }
    console.log (data);
});
console.log("End of code");