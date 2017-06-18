let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
	},
	image: String,
	description: String
});

let Product = mongoose.model('Product', productSchema);
module.exports = Product;
