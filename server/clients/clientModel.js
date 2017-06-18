var mongo = require('mongoose');
var clientModel =mongo.Schema({
	name:String,
	companyName:String,
	phone:Number,
	email:String
});
var Client =mongo.model('Client',clientModel);
module.exports = Client;