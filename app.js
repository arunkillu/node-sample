/**
* @Author arunkillu@gmail.com
* @Date 1 nov 2016
* @Description This servers as main application entry file
*/
var ENV = process.env.NODE_ENV; // gets the node environment variable
var config = require('./config/config.js');//import config file
var conf = config(ENV);//get config for the current environment 
var express = require('express');//import express framework 
var db = require('./db/db_connect.js'); //Connect to local databse
var bodyParser = require('body-parser'); //import module body-parser for parsing the http request data
var app = new express ();//create new express app
var user = require('./controller/user/index.js');//import user controller
app.use(user);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded.
//create a route for site home 
app.get('/', function (req, res) {
  res.send("Hello world");
});

//listen to http port 3000 - defined in config
app.listen(conf.server.port, conf.server.ip, function () {
  console.log('app listening on '+ conf.server.ip + ':'+ conf.server.port +'!');
});
