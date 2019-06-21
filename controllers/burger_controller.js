var express = require("express");

var router = express.Router();

// import the model (burgers)
var burgers = require("../models/burger");

router.get("/", function(req,res) {
    burgers.selectall(function(data) {
        var hbsObject = {
            burgers: data
        };
     //   console.log(hbsObject);
        res.render("index", hbsObject);

    });
    
});

router.post("/api/burgers", function(req,res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.insertId});
    });
});  

router.put("/api/burgers/:id", function(req,res) {
    var id =  req.params.id
var devour =  req.body.devoured;
var newId = parseInt(id)
console.log(newId + devour);
    burgers.updateOne(devour, id, function(result){
        if(result.changedRows === 0 ) {
            return res.status(404).end();
       
        }
        res.status(200).end();
       
    })
});
module.exports = router;