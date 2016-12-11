/**
* @Author arunkillu@gmail.com
* @Date 2 nov 2016
* @Description connect to mysql databse and return the connection to the application
*/
var ENV = process.env.NODE_ENV;
var config = require('./../config/config.js');
var db = require('./db.js');
var conf = config(ENV);
db.init(conf);
module.exports = db;