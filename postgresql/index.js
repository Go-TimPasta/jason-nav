const { Pool } = require('pg');
const PASSWORD = require('../config.js');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'navBarDB',
  password: PASSWORD,
  port: 5432
});

module.exports = pool;
