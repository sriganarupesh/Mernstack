
 var http = require('http')

 http.createServer(function (req, res){
 res.WriteHead(200, {'Content-Type': 'text/html'});
 res.write('Hello world!');
	res.write(req.url);
	res.end();
}).listen(8080);