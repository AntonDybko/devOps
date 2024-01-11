const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST || "postgres-container",
    database: process.env.POSTGRES_DB || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin",
    port: process.env.POSTGRES_PORT || 8000,
});

module.exports = pool;