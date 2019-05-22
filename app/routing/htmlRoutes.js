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

// Route that sends the user to the survey Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Route that sends the user to the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

//This route will redirect any route not handled to the index "/"
app.get('*',function (req, res) {
  res.redirect('/');
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});