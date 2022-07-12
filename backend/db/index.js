const { query } = require('express');
const { Pool } = require('pg');
require('dotenv').config()


client = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

module.exports = {
    async query(text, params){
        const start = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - start
        debug('executed query', {text, duration, rows: result.rowCount})
        return result
    }
}