const { Pool } = require("pg");

/*const pool = new Pool({
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin",
    port: process.env.POSTGRES_PORT || 5432
});*/
const pool = new Pool({
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin",
    port: process.env.POSTGRES_PORT || 5432
});
/*const pool = new Pool({
    user:"postgres",
    host: process.env.POSTGRES_HOST,
    database:"postgres",
    password:"admin",
    port: 5432,
});*/

module.exports = pool;