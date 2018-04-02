//hard-coded data

var db = require('../models');

// functions

function index(req, res){
	db.favArtists.find({}, function(err, foundArtists){
		if(err){
			console.log(err);
		}
		res.json(foundArtists);
	});
}

function create(req, res){
	db.favArtists.create(req.body, function(err, artist){
		if(err){
			console.log('error', err);
		}
		res.json(artist);
	});
}