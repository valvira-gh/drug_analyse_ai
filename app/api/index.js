var Pool = require('pg').Pool;
require('dotenv').config();
var pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});
pool.query('SELECT NOW()', function (err, res) {
    if (err) {
        console.error('Error executing query', err.stack);
    }
    else {
        console.log('Connected successfully', res.rows[0]);
    }
});
