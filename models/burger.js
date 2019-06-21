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
     updateOne: function(a, cb) {
         orm.updateOne(a, function(results){
            cb(results)
             console.log("burger.js" + results)
         });
     
     }
}

module.exports = burgers