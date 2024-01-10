const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const games = require("./routes/games");
const swaggerUI = require("swagger-ui-express");
const specs = require("./swaggerConfig");
const healthController = require("./controllers/healthController");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/healthz', healthController.healthCheck);
app.get('/db-check', healthController.healthCheckOfDb);
app.use("/games", games);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Start the Express server
const server = app.listen(PORT, () => console.log("Example app listening on port ", PORT));

module.exports = { server }


