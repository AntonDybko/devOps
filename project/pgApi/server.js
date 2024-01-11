const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const games = require("./routes/games");
const swaggerUI = require("swagger-ui-express");
const specs = require("./swaggerConfig");
const healthController = require("./controllers/healthController");
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const pool = require("../dbConfig");


async function createAlbumsTable() {
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            genre VARCHAR(255) NOT NULL,
            release_year INT NOT NULL
        );
      `;
  
      await pool.query(query);
      console.log('Albums table created');
    } catch (err) {
      console.error(err);
      console.error('Albums table creation failed');
    }
  }
  
await createAlbumsTable();

app.get('/healthz', healthController.healthCheck);
app.get('/db-check', healthController.healthCheckOfDb);
app.use("/games", games);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Start the Express server
const server = app.listen(PORT, () => console.log("Example app listening on port ", PORT));

module.exports = { server }


