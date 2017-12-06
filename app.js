var express = require("express"); //Import express to use as our webserver
var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
var express = require("express");
var controler = require('./controler');
var sys = require('util');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

controler(app);


app.listen(3000);
console.log('3000 is the magic port');