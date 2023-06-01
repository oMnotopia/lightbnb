const { Pool } = require('pg');

const pool = new Pool({
  user: 'clayton',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

const query = (sqlString, params) => {
  return pool.query(sqlString, params);
};

module.exports = { query };