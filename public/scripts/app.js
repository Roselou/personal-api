//Hard coded data

var profile = [{
	name: 'Rose Lou',
	githubUserName: 'Roselou',
	githubLink: 'https://github.com/Roselou'
	githubProfileImage: url,
	personalSiteLink: 'https://roselou.github.io/', 
	currentCity: 'San Francisco, CA'
	pets: [
		{name: 'Stella', breed: 'Keeshond', age: 4, type: 'dog'},
		{name: 'Chloe', breed: 'Shih Tzu', age: 10, type: 'dog'},
		{name: 'Cookie', breed: 'Shih Tzu', age: 12, type: 'dog'},
		{name: 'Ivy', breed: 'Shih Tzu', age: 3, type: 'dog'},
		{name: 'Bella', breed: 'Shih Tzu', age: 2, type: 'dog'},
		{name: 'Teako', breed: 'Australian Shepherd', age: 5, type: 'dog'}
	]
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