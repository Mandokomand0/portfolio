var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them.
var routes = require("./controllers/protfolio_controller.js");

app.use("/", routes);

app.listen(port);
