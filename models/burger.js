var orm = require("../config/orm");

var burgers = {
    selectall: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    }
}

module.exports = burgers