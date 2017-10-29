const express = require('express');
const bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");
app.use("/", routes);
app.listen(port);

// app.xxx('/', function(req, res){
//     app.render('burgers');
// })





