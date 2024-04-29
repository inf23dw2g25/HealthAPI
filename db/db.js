'user strict'

var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'mysql',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'healthapi'
});

connection.connect(function(err){
    if(err){
        console.log('Erro de Conexão com a base de dados , por favor tente de novo!');
        throw err;
    }

    console.log('Conexão com a base de dados bem sucedida!!!');
});

module.exports = connection;