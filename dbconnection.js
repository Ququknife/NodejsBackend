var mySQL = require('mysql');

var connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devlearn'
});

module.exports = connection;