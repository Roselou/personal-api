var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

var Schema = mongoose.Schema;

// var Profile = require('./profile');

var favArtistsSchema = new Schema ({
	_id: Number,
	name: String,
	movement: String,
	medium: String,
	artwork: String,
	yearsAlive: Number
});

var favArtists = mongoose.model('favArtists', favArtistsSchema);

	module.exports = favArtists;