const { Pool } = require('pg');     // Database connection

// Importing environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT
});

module.exports = pool;