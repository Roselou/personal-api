var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

var Profile = require('./profileController');
var favArtists = require('./favArtistsController');

module.exports = {
	Profile : Profile,
	favArtists : favArtists 
};