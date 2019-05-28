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
    // console.log(newfriend);
    var myScore = newfriend.scores; 
    // console.log(myScore);
    var myScore_total =0; 
    for (var i =0; i<myScore.length; i++){
      myScore_total+= parseInt(myScore[i]); 
    }
    // console.log(myScore_total);
    
    var diff = []; 
    for (var i =0; i<friendsData.length;i++){
      var score = friendsData[i].scores; 
      // console.log(score);
      var score_total=0; 
      var score_difference; 
      for (var j = 0; j<score.length; j++){
        // do the math- difference & match here ...
        score_total+=parseInt(score[j]); 
      }
      score_difference = Math.abs(score_total-myScore_total); 
      // console.log(score_total);
      // console.log(score_difference);
      diff.push(score_difference); 
    }
    // console.log(diff);
    var min_diff = diff[0]; 
    var bestMatchIndex = 0; 
    for (var k = 0; k<diff.length;k++){
      if (min_diff>diff[k+1]){
        min_diff=diff[k+1]; 
        bestMatchIndex =k+1; 
      }
    }
    // console.log(min_diff);
    // console.log(bestMatchIndex);
    var bestMatch = friendsData[bestMatchIndex].name; 
    var bestMatchPhoto = friendsData[bestMatchIndex].photo; 
    console.log(bestMatch);
    console.log(bestMatchPhoto);
    res.json({
      'bestMatch': bestMatch,
      'bestMatchPhoto' : bestMatchPhoto
    });
    friendsData.push(newfriend);
  });
}; 


