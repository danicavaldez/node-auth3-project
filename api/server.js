const express = require("express");

const apiRouter = require("./api-router");

const server = express();

server.use(express.json());
server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.send("<h1>Node-Auth3-Project");
});

module.exports = server;
