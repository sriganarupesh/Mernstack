
 var Rupesh = require('http')
 Rupesh.createServer(function (req, res){
 res.WriteHead(200, {'Content-Type':'text/html'});
 res.write(' I AM RUPESH');
 res.write(req,url)
 res.end();
}).listen(4000);