const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

interface QueryResult {
    rows: any[];
}

pool.query('SELECT NOW()', (err: Error, res: QueryResult) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Connected successfully', res.rows[0]);
    }
});