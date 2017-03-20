//require express
var express	= require('express');
var path = require('path');
//create our router obj
var router = express.Router();

//export our router
module.exports = router;

//route for our homepage
router.get('/', function(req, res){
  // res.send('hello World!');
   res.sendFile(path.join(__dirname, '../index.html'));
});

//route for our obout page
router.get('/about', function(req, res){
   res.send('hello World i am the about page!');
});

//route for our contact page
router.get('/contact');
router.post('/contact');