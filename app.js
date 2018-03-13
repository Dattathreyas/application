
var express = require('express');

var http = require('http');

var path = require('path');

var ejs = require('ejs');

var jade = require('jade');

var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/application");

mongoose.connection.on("error", function(err){
    console.log(err);
    process.exit();

});
var port = 8000;

app.set('port',port);

var server = http.createServer(app);

server.listen(port);

app.set('view engine','ejs');

app.set('view engine' ,'jade');

app.use(express.static(path.join(__dirname, 'public')));

var router = express.Router();

app.use(router);