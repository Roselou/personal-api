//Hard coded data

var profile = [{
	name: String,
	githubUserName: String,
	githubLink: url,
	githubProfileImage: url,
	personalSiteLink: link, 
	currentCity: String,
	pets: 

}];


$(document).ready(function(){
	console.log('app.js loaded');
	$.ajax({
		method: 'GET',
		url: '/api/profile',
		success: function(profileInfo){
			res.json(profileInfo);
		},
		error: function(error){
			console.log('error with profile');
		}
	})
})