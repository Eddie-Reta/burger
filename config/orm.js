var connection = require("../config/connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
            
        });
    },
}
module.exports = orm;