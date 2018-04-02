var express = require('express');
	app = express();
	db = require('./models');
	bodyParser = require('body-parser');
	controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/', function(req, res){
		res.sendFile('./views/index.html', {root: __dirname});
});
//hard-coded data
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
app.get('/api', function(req, res){
	res.json(Profile)
});

// app.get('/api/profile', controllers.profile.index);

// app.post('api/profile', controllers.profile.create)


//LISTENER
app.listen(process.env.PORT || 3000);