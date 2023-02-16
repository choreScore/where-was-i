const userModel = require('./user.model');

module.exports = {
  async createUser(req, res) {
    // send data to userModel.createUser
    /*
      {
        auth_token:
        'Loremipsumdolorsitamet,quimboreadipisigminimsintcillumsinteturcupidatat.hk',
        username: 'Coppola',
        email: 'francis@ford.com',
      }
    */
    await userModel.createUser(req.body);
    // trying to make new commit
    res.status(201);
  },

  // updateUser(req, res) {
  //   // send data to userModel.updateUser
  //   console.log('update User');
  // },
  //
  // deleteUser(req, res) {
  //   // send data to userModel.deleteUser
  //   console.log('delete User');
  // },

  async getUser(req, res) {
    // get data from userModel.getUser
    // when login
    // send as query the username: mikeJordan
    // /user?username=mikeJordan
    // should recieve an object with all user data
    /*
      {
        username: mikeJordan
        email: jordan@mike.com
      }
    */
    const userInfo = await userModel.getUser(req.query.username);
    res.status(201).send(userInfo);
  },
};
