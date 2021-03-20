const { Pool } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool();

module.exports = {
  query: (sql, params) => pool.query(sql, params),
};
