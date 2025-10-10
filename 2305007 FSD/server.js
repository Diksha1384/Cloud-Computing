var http = require('http')
var fs = require('fs');
//create a server object
var serv = http.createServer(func);
serv.listen(8080);//the server object listens on port 8080
console.log('server is running');
var stream;
function func(req,res)
{
    var path = 'simplr.mp4';
    const stat = fs.stateSync(path);
    const fileSize = stat.size;
    const head = {'Content-Length': fileSize,
        'Content-Type': 'video/mp4' }
        res.writeHead(200, head);
        stream = fs.createReadStream(path);
        stream.path(res);
}