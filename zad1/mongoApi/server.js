const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const games = require("./routes/games");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc")
const options = {
  definition: {
    openapi: "3.0.0",
    info:{
      title: "Games API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "http://localhost:8000"
      }
    ]
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const mongoUrl = process.env.MONGO_URL
//const mongoUrl = "mongodb://localhost:27017";

let db;

MongoClient.connect(mongoUrl)
    .then((client) => {
      db = client.db("games"); // Replace with your actual database name
      console.log("Connected to MongoDB");

      app.use("/games", games(db));
      app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

      // Start the Express server after successfully connecting to MongoDB
      app.listen(8000, function () {
        console.log('Example app listening on port 8000.');
      });
    })
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


