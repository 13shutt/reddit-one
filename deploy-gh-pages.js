var ghpages = require('gh-pages');
 
ghpages.publish('build', {
  repo: 'git@github.com:13shutt/reddit-one.git'
}, function(err) {
  console.log("if 'undefined' thats means its done :) " + err)
});