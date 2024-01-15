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
        //url: "http://localhost"
        url: "http://localhost:8000"
      }
    ]
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options);
module.exports = specs;