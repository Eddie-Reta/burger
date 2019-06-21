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
     
var idSt =  req.params.id
var id = parseInt(idSt)
console.log(id);
    burgers.updateOne(req.params.devoured, function(result){
        if(result.changedRows === 0 ) {
            return res.status(404).end();
       
        }
        res.status(200).end();
       
    })
});
module.exports = router;