// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Displays all friends in json format 
app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

app.post("/api/friends", function (req,res){
  var newfriend = req.body; 
  console.log(newfriend);
  friends.push(newfriend); 
  res.json(newfriend); 
}); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
