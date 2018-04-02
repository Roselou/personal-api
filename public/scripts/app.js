//Hard coded data




$(document).ready(function(){
	console.log('app.js loaded');
	$.ajax({
		method: 'GET',
		url: '/api/profile',
		success: function(profile){
			renderProfile(profile);
		},
		error: function(error){
			console.log('error with profile');
		}
	})

	var profile = [{
	name: 'Rose Lou',
	githubUserName: 'Roselou',
	githubLink: 'https://github.com/Roselou'
	githubProfileImage: 'https://avatars3.githubusercontent.com/u/34549947?s=460&v=4',
	personalSiteLink: 'https://roselou.github.io/', 
	currentCity: 'San Francisco, CA'
	pets: [
		{name: 'Stella', breed: 'Keeshond', age: 4, type: 'dog'},
		{name: 'Chloe', breed: 'Shih Tzu', age: 10, type: 'dog'},
		{name: 'Cookie', breed: 'Shih Tzu', age: 12, type: 'dog'},
		{name: 'Ivy', breed: 'Shih Tzu', age: 3, type: 'dog'},
		{name: 'Bella', breed: 'Shih Tzu', age: 2, type: 'dog'},
		{name: 'Teako', breed: 'Australian Shepherd', age: 5, type: 'dog'}
	];
}];

	function renderProfile(profile){
		var htmlToAppend = (`
			<div class="card" style="width: 18rem;">
			  <img class="card-img-top" src="..." alt="Card image cap">
			  <div class="card-body">
			    <h5 class="card-title">${profile.name}</h5>
			    <p class="card-text">Github Username: ${profile.githubUserName}</p>
			    <p class="card-text">Github Link: ${profile.githubLink}</p>
			    <p class="card-text">Github Profile Image: ${profile.githubProfileImage}</p>
			    <p class="card-text">Personal Site Link: ${profile.personalSiteLink}</p>
			    <p class="card-text">Current City: ${profile.currentCity}</p>
			    <p class="card-text">Pets: ${profile.pets}</p>
			    <a href="#" class="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
			`);
		$('.profilecard').prepend(htmlToAppend)
	}

//document.ready closers
})