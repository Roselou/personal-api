var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profile = require('./profile');

var favArtistSchema = new Schema ({
	name: String,
	movement: String,
	medium: String,
	artwork: [String],
	yearsAlive: Number
});

var favArtist = mongoose.model('favArtist', fa
	);

	module.exports = favArtist;