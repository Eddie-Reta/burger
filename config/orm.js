var connection = require("../config/connection");

//helper function 
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
 
};
var eat = "burgers";
var orm = {
    //pulls all data in the table for the response
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
            
        });
    },
    //adds new data to the table
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
      //  console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        } );
 },
 //updates data in the table
    updateOne: function(updateId, cb) {
        var upId = "UPDATE " + eat + " SET ? WHERE ?";
       
        connection.query(upId,[devoured, updateId], function(err,results) {
         
            if (err) {
               
                throw err;

            };
            cb(results)
           console.log("update " + results);
        }); 
    }
}
module.exports = orm;
