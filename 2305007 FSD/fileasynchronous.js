/*Writing data to a file using Asynchronous file writeFile().
Udage of WriteFile() with and without flag demonstrated*/
var fs = require('fs');
var data = 'This is my BCA file content.';
//writeFile() will create a new file, or overwrite an existing file with the same name.
fs.writeFile(__dirname +'encoding.js', data, function(error){
    if (error) {
        return console.error(error.message);
    }
});
//passing the flag wx causes an error to be thrown if the file already exists,
//While the a flag causes data to be appended to an existing file instead of overwriting.
fs.writeFile(__dirname+ 'encoding.js',data,{
    flag: 'wx'
} function(error){
    if (error){
        return console.error(error.message);
    }
});