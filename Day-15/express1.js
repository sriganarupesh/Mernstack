var express=require('express');
var app=express();
app.get('/murali',function(req,res){
	res.send("welcome to express js world tested by manoj");
});
app.listen(3000);