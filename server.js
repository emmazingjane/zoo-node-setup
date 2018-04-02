var express = require('express');
var app = express();
varbodyParser = require('body-parser');


app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}))


app.get('/', function(req,res){
	res.sendFile('views/index.html',)
})

app.listen(3000, function(){
	console.log('app is running')
})