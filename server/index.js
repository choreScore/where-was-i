const { serverEndpoints } = require('./src/server.js');

const server = serverEndpoints();

const PORT = 4000;

server.listen(PORT, () => {
  console.info(`Server is listening to ${PORT}`);
});
