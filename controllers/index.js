var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

var Profile = require('./profileController');
var favArtists = require('./favArtistsController');
var Api = require('./apiController');

module.exports = {
	Profile : Profile,
	favArtists : favArtists, 
	Api : Api
};