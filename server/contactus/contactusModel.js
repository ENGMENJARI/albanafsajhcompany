var mongo = require('mongoose');
var contactModel=mongo.Schema({
	name:String,
	email:String,
	phone:Number,
	message:String
})

var Contactus=mongo.model('Contactus',contactModel);
module.exports=Contactus