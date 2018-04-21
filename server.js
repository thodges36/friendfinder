// Note: Much of this information was used in 16 - Hot Restaurant

// Dependencies

var express = require("express");
var bodyParser = require("body-parser");

// Set up express server
var app = express();

// Sets an initial port. Will be used for heroku deploy.
var PORT = process.env.PORT || 3000;

//  Data parsing for express server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
