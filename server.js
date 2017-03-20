//Import the http module
//var http = require('http');

//handle sending request and returning response
//function handleRequest(req, res){
	//return string
//	res.end('hello world TheWorriesOfTheNet!');
//}

//create the server
//var server = http.createServer(handleRequest);

//start on the server and listen on port x
//server.listen(8080, function(){
//   console.log('Listening on port 8080');
//}); 

/////////////// EXPRESS ////////

//require our dependencies

var	express = require('express');
var app = express();
var port = 8080;
//We have to tell our server where to look us 
var router = require('./app/routes');
app.use('/', router);

//setting our Public files (css, images, javaScripts etc) locations
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function(){
   console.log('app started Nick')
}); 

