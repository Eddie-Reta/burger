var express = require("express");
var app = express();
var router = express.Router();

// import the model (burgers)
var burgers = require("../models/burger");

router.get("/", function(req,res) {
    burgers.selectall(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);

    });
});

module.exports = router;