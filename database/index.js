const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'navBarDB',
});

connection.connect();

module.exports = connection;
