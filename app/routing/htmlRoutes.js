var path = require("path");
module.exports = function (app) {

  // Routes
  // =============================================================

  // Route that sends the user to the survey Page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Route that sends the user to the home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //This route will redirect any route not handled to the index "/"
  app.get('*', function (req, res) {
    res.redirect('/');
  });
}
