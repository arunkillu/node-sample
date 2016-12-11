/**
* @Author arunkillu@gmail.com
* @Date 1 nov 2016
* @Description Returns the settings based on the env variable
*/
module.exports = function(env) {
	if (typeof env == undefined || env == '') {
		throw new Error("Env not defined.")
	}
    return require("./"+env+".js");
};