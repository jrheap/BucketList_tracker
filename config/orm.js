var connection = require('./connetion.js');


var orm = {
     all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      // console.log(queryString)
    });
  },
  update: function(tableInput, condition, cb){
    connection.query('UPDATE'+tableInput+' SET done=true WHERE id='+condition+';', function(err,result){
      if(err)throw err
      cd(result)
    })
  }
}

module.exports = orm;