const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-Local-Mongoose');
var Country = new Schema({
	username: {
		type: String
	},
	password: {
	    type: String 
	}
})
Country.plugin(passportLocalMongoose);
module.exports = mongoose.model('politics',Country)