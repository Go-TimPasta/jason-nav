const mysql = require('mysql');
const PASSWORD = require('./config.js');

const connection = mysql.createConnection({
  user: 'root',
  password: PASSWORD,
  database: 'navBarDB',
});

connection.connect();

module.exports = connection;
