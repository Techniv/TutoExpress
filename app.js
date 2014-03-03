//----------------------------------------
// TutoExpress
// For 'Node.JS - Une première application Web avec ExpressJS'
// by Techniv <vpeybernes.pro@gmail.com>
// License MIT
//----------------------------------------

var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
	res.end("Hello World!");
});

app.get('/hello.html', function(req, res){
	res.end(
		"<!DOCTYPE html>"
			+"<html>"
			+"<body><h1>Hello World!</h1></body>"
			+"</html>"
	);
});

app.listen(80);