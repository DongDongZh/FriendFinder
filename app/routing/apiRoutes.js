// ===============================================================================
// LOAD DATA
var friendsData = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
    for (var i =0; i<friendsData.length;i++){
      var totalScore = friendsData[i].scores; 
      console.log(totalScore);
    }
  });
  app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    console.log(newfriend);
    friendsData.push(newfriend);
    res.json(newfriend);
  });
}; 


