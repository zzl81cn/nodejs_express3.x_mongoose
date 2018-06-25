const rimraf = require('rimraf');

rimraf('./123.txt', function(err) {
  console.log('err')
})