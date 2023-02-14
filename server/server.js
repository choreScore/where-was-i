const { serverEndpoints } = require("./index.js");

const server = serverEndpoints();

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
