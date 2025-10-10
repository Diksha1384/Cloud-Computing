var fs = require('fs')
fs.readFile(__filename, function(error, data){
    if(error){
        return console.error(error.message);
    }
    console.log("printing without encoding:")
    console.log(data);
})
fs.readFile(__filename, "utf8", function(error,data){
    if(error){
        return console.error(error.message);
    }
    console.log("printing by encoding:")
    console.log(data);
});