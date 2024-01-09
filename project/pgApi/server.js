const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const games = require("./routes/games");
const swaggerUI = require("swagger-ui-express");
const specs = require("./swaggerConfig");
const healthController = require("./controllers/healthController");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/healthz', healthController.healthCheck);
app.get('/db-check', healthController.healthCheckOfDb);
app.use("/games", games);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

//app.get("/", gameController.getGames)


// Start the Express server
app.listen(8000, function () {
  console.log("Example app listening on port 8000.");
});


