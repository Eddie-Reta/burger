var express = require('express');

var exphbs = require('express-handlebars');

var app = express();

//var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static('public'));
app.use(express.static('controllers'));

var routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost: " + PORT);
});

