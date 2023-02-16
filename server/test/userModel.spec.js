const { expect, assert } = require('chai');
const config = require('../knexfile');
const { AUTH_TABLE } = require('../src/user/user.model');
const knex = require('knex')(config);
const userModel = require('../src/user/user.model');
const USERS_TABLE = userModel.USERS_TABLE;
const userFixture = require('./testFixture');

describe('Shows tests', () => {
  before(async () => {});

  afterEach(async () => {});

  describe('setup', () => {
    it('should connect to database', () => {
      knex.raw('select 1 as result').catch(() => {
        assert.fail('unable to connect to database');
      });
    });

    it('has run the initial migration', () => {
      knex(USERS_TABLE)
        .select()
        .catch(() => assert.fail('customer table is not found.'));
    });
  });

  describe('getUser', () => {
    it('should recieve an object with username parsed in and email', async () => {
      const user = await userModel.getUser('tarantino');
      expect(user[0].username).to.be.equal('tarantino');
      expect(user[0].email).to.be.equal('quentin@gmail.com');
    });
  });

  describe('createUser', () => {
    before(async () => {
      await knex('users')
        .where('username', userFixture.userToken().username)
        .returning('username')
        .del()
        .then(() => {
          console.info();
        })
        .catch(console.info);

      await knex('auth')
        .where('auth_token', userFixture.userToken().auth_token)
        .returning('auth_token')
        .del()
        .then(() => {
          console.info();
        })
        .catch(console.info);
    });

    it('should insert into user table', async () => {
      const newUser = userFixture.userToken();
      const createUser = await userModel.createUser(newUser);
      const checkNew = await knex(USERS_TABLE)
        .join(AUTH_TABLE, 'users.user_id', 'auth.user_id')
        .where('username', newUser.username);
      expect(checkNew[0].username).to.equal('Coppola');
      expect(checkNew[0].auth_token).to.be.a('string');
    });
  });
});
