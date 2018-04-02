var express = require('express');
	app = express();
	db = require('./models');
	bodyParser = require('body-parser');
	controllers - require('./controllers');

	app.use(bodyParser.urlencoded({ extended: true}));

	app.use(express.static('public'));

	app.get('/', function(req, res){
		res.sendFile('views/index.html', {root: __dirname});
	});

	app.get('/api', controllers.api.index);

	app.get('/api/profile', controllers.profile.index);
	

	//LISTENER
	app.listen(3000);