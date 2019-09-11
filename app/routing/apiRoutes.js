//what data the user sees and what is posted from the server
let friendsInfo = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function(req, res) {
    return res.json(friendsInfo)
  });

  app.post('/api/friends', function(req, res) {
    friendsInfo.push(req.body);
    res.json();
  });

}