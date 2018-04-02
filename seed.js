var db = require("./models");


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

db.Profile.remove({}, function(err, profile){
  // code in here runs after all albums are removed
  db.Profile.create(Profile, function(err, profile){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR', err); }
    console.log("all profile:", Profile);
    console.log("created", Profile.length, "profile");
    process.exit();
  });
});