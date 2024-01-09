const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.POSTGRES_USER, //|| "anton",
    host: process.env.POSTGRES_HOST,// || "localhost",
    database: process.env.POSTGRES_DB,// || "games",
    password: process.env.POSTGRES_PASSWORD,// || "admin",
    port: process.env.POSTGRES_PORT// || "5432"
});

module.exports = pool;