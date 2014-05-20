/*
	requires 'colors' and 'connect'

	npm install colors
	npm install colors
*/

var colors = require('colors');
var connect = require('connect');
connect().use(connect.static(__dirname)).listen(8080);
console.log("########--> WEBSERVER @ ".red, "localhost:8080".green,   " <--########".red);