var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal-api');

var Schema = mongoose.Schema;

var ProfileSchema = new Schema ({
	name: String,
	githubUserName: String,
	githubLink: String,
	githubProfileImage: String,
	personalSiteLink: String, 
	currentCity: String,
	pets: [String]
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;