'user strict'

var mysql = require('mysql2');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '0688000503',
    database: "healthapi"
});

connection.connect(function(err){
    if(err){
        console.log('Error on database connection');
        throw err;
    }

    console.log('Database connection Active');
});

module.exports = connection;