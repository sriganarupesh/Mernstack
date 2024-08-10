var express = require('express');
var app = express();

app.get('/755',function(req,res){
	res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);