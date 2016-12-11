/**
* @Author arunkillu@gmail.com
* @Date 2 nov 2016
* @Description functions for connecting to mysql database and init query builder
*/
var mysql = require('mysql');
var knex = require('knex')({});//used for query building
var kmysql = require('knex')({client: 'mysql'});
var db = function() {};
db.con = null;
db.knex = kmysql;
module.exports = db;
db.init = function(config) {
	db.con = mysql.createConnection({
		host: config.db.host,
		user: config.db.user,
		password: config.db.password,
		database: config.db.database
	});
	db.con.connect(function(err) {
		if (err) throw err
		 console.log('connected to mysql database...');
	});
}

db.get = function() {
	if (!db.con)
	    throw new Error("No database connection available.");
	return db.con;
}

db.getBuilder =  function () {
	return db.knex;
}


