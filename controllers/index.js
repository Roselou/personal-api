var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

module.exports = {
	profile: require('./profileController'),
	favArtist: require('./favArtistController')
};