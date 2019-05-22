// ===============================================================================
// LOAD DATA
var friendsData = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);
  });
}; 


