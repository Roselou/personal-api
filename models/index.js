var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongolab-clear-84219");

var favArtists = require('./favArtists');
var Profile = require('./profile');

module.exports = {
	favArtists : favArtists,
	Profile : Profile
}