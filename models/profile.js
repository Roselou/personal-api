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

var Profile = [{
  name: 'Rose Lou',
  githubUserName: 'Roselou',
  githubLink: 'https://github.com/Roselou',
  githubProfileImage: 'https://avatars3.githubusercontent.com/u/34549947?s=460&v=4',
  personalSiteLink: 'https://roselou.github.io/', 
  currentCity: 'San Francisco, CA',
  pets: [
    {name: 'Stella', breed: 'Keeshond', age: 4, type: 'dog'},
    {name: 'Chloe', breed: 'Shih Tzu', age: 10, type: 'dog'},
    {name: 'Cookie', breed: 'Shih Tzu', age: 12, type: 'dog'},
    {name: 'Ivy', breed: 'Shih Tzu', age: 3, type: 'dog'},
    {name: 'Bella', breed: 'Shih Tzu', age: 2, type: 'dog'},
    {name: 'Teako', breed: 'Australian Shepherd', age: 5, type: 'dog'}
  ]
}];