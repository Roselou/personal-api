var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

var Schema = mongoose.Schema;

var ProfileSchema = new Schema ({
	name: String,
	githubUserName: String,
	githubLink: url,
	githubProfileImage: url,
	personalSiteLink: link, 
	currentCity: String,
	pets: [familyPets]
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;