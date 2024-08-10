var express=require('express');
var app=express();
app.get('/home',function(req,res){
	res.send("welcome to home page.Made by manoj");
});
app.post('/contact',function(req,res){
	res.send("You Just Called The Post Method At '/contact'!\n");
});
app.all('/test',function(req,res){
	res.send("HTTP method doesn't have any effect on this route!");
});
app.listen(3000);