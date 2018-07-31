var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Royall14',
    database: 'bucket_db'
});

connection.connect(function(err){
    if(err)throw err;
     console.log('I am listening on id: ' + connection.threadId);
     
});

module.exports = connection;