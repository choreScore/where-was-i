const express = require("express");
const server = express();

server.use(express.json());


const serverEndpoints = () => {
server.get('/')


return server;
};

module.exports = { serverEndpoints };