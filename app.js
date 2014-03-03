//----------------------------------------
// TutoExpress
// For 'Node.JS - Une première application Web avec ExpressJS'
// by Techniv <vpeybernes.pro@gmail.com>
// License MIT
//----------------------------------------

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.end("Hello World!");
});

app.listen(80);