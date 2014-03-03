//----------------------------------------
// TutoExpress
// For 'Node.JS - Une première application Web avec ExpressJS'
// by Techniv <vpeybernes.pro@gmail.com>
// License MIT
//----------------------------------------

var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

app.get('/hello.txt', function(req, res){
	res.end("Hello World!");
});

app.get('/hello.html', function(req, res){
	res.end(
		"<!DOCTYPE html>"
			+"<html>"
			+"<head><link rel='stylesheet' href='style.css' /></head>"
			+"<body><h1>Hello World!</h1></body>"
			+"</html>"
	);
});

app.listen(80);