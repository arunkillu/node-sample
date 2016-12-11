/**
* @Author arunkillu@gmail.com
* @Date 13 nov 2016
* @Description Conroller for user
*/
var express = require('express');
var app = module.exports = express();//export user controller
var user = require('./../../model/user.js');//import user model

/**
* @Description List user
*/
app.get('/user/list', function(req, res) {
	//invoke user model function getAll
    user.getAll('*', null, null, null, function (row) {
         res.json(row); // send user data as json 
    }); 

});
