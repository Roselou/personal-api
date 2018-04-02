function index(req, res) {
  res.json({
    message: 'Lets get Personal',
    documentation_url: 'https://github.com/sf-wdi-labs/personal-api',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}