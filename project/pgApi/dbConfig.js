const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin",
    port: process.env.POSTGRES_PORT
});
/*{
    user: 'postgres',
    host: 'postgres',
    database: 'postgres',
    password: 'admin',
    port: 'tcp://172.17.0.2:5432'
  }*/

module.exports = pool;