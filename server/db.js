const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: "u8yojj7f",
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
});

module.exports = pool;