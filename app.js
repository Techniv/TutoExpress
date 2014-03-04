//----------------------------------------
// TutoExpress
// For 'Node.JS - Une première application Web avec ExpressJS'
// by Techniv <vpeybernes.pro@gmail.com>
// License MIT
//----------------------------------------

var express = require('express');
var app = express();

app.configure(function(){
	app.set('view engine', 'ejs');
	app.set('views', __dirname+"/views");
})

app.use(express.static(__dirname+"/public"));

app.get('/hello.txt/:name?', function(req, res){
	var name = req.param('name', "World");
	res.end("Hello "+name+"!");
});

app.get('/hello.html/:name?', function(req, res){
	var name = req.param('name', "World");
	res.render('hello.ejs', {name: name});
});

app.listen(80);