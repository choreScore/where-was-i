const express = require('express');
const server = express();
const userController = require('./users/users.controller');

server.use(express.json());

const serverEndpoints = () => {
  server.get('/user', userController.getShowList);
  server.post('/user', userController.postNewShow);
  server.get('/user/movie', userController.getShowProgress);
  server.put('/user/movie', userController.updateProgress);
  server.delete('/user/movie', userController.deleteShow);

  return server;
};

module.exports = { serverEndpoints };
