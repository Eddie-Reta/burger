var orm = require("../config/orm");

var burgers = {
    selectall: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        })
     },
     updateOne: function(a, b, cb) {
         orm.updateOne(a, b, function(results){
            cb(results)
             console.log("burger.js" + results)
         });
    
     }
}

module.exports = burgers