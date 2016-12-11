/**
* @Author arunkillu@gmail.com
* @Date 12 nov 2016
* @Description User Model
*/
var db = require('./../db/db_connect.js');// init database
var user = function() {};
user.con = db.get();//get databse connection object
user.tableName = 'user' //set table name
module.exports = user; //export user object
/**
* @Description Get all user data
* @Param col array [col1, col2, ..]
* @Param search object {key:value}
* @Param limit int
* @Param offset int
* @Param done callback function 
*/
user.getAll = function (col, search, limit, offset, done) {
	var qString	= null;
	var q = db.getBuilder()(user.tableName); //knex query builder
	q.column(col).select();
	if (search) {
		q.where(search);
	}
	if (typeof limit === 'number') {
		q.limit(parseInt(limit));
	}
	if (typeof offset === 'number') {
		q.offset(parseInt(offset));
	}
	qString = q.toString();//select * from user
	//execute mysql query
	user.con.query(qString, function (err, rows, fields) {
	  	if (err) throw err;
		done(rows);
	});
}