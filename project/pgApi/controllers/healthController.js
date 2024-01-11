const pool = require("../dbConfig");
const queries = require("../queries");

const healthController = {
    healthCheckOfDb: (req, res) => {
        pool.query(queries.getGames, (err, results) => {
            if (err) console.log(err);//throw new Error('Database connection failed');
            res.status(200).send('OK');
        })
    },
    healthCheck: (req, res) => {
        res.status(200).send('OK');
    }
}
module.exports = healthController;