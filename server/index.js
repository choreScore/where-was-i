const express = require("express");
const server = express();

server.use(express.json());


const serverEndpoints = () => {
return server;
};

module.exports = { serverEndpoints };