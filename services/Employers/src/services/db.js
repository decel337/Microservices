const { Pool } = require('pg')

const pool = new Pool({
    user: 'underground',
    database: 'underground',
    password: 'eatdog',
    port: 5432,
    host: 'employers-db',
})

module.exports = { pool };
