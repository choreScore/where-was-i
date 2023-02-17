const { expect, assert } = require('chai');
const config = require('../knexfile');
const knex = require('knex')(config);
const showsModel = require('../src/shows/shows.model');
const USERS_TABLE = showsModel.USERS_TABLE;
const showFixture = require('./testFixture');

describe('Shows tests', () => {
  before(async () => {});

  afterEach(async () => {
    await knex('tv_shows')
      .where('name', showFixture.getShow()[1].showName)
      .returning('name')
      .del()
      .then(() => {
        console.info();
      })
      .catch(console.info);

    await knex('user_shows')
      .where('user_id', showFixture.getShow()[1].user_id)
      .returning('user_id')
      .del()
      .then(() => {})
      .catch(console.info);
  });

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

  describe('getAllShows', () => {
    it('should return an array of shows name', async () => {
      const shows = await showsModel.getShowList(-1);
      expect(shows).to.be.an.instanceof(Array);
      expect(shows[0].showname).to.be.equal('Sopranos');
    });
  });

  describe('postNewShow', () => {
    it('should add a new show to the tv_shows table if it does not exists', async () => {
      const newShow = showFixture.getShow();
      await showsModel.postNewShow(newShow[1]);
      const shows = await showsModel.getShowList(-5);
      expect(shows[0].showname).to.be.equal('Cowboy Bebop');
      expect(shows[0].image).to.be.a('string');
    });
  });

  describe('deleteShow', () => {
    it('should delete from user_shows_table row matching user/show', async () => {
      const newShow = showFixture.getShow();
      await showsModel.postNewShow(newShow[1]);
      await showsModel.deleteShow('cb123', -5);
      const shows = await showsModel.getShowList(-5);
      expect(shows[0]).to.be.equal(undefined);
    });
  });

  describe('updateProgress', () => {
    it('should update progress on user_shows', async () => {
      const newShow = showFixture.getShow()[1];
      await showsModel.postNewShow(newShow);
      newShow.season = 2;
      newShow.episode = 4;
      await showsModel.updateProgress(newShow);
      const shows = await showsModel.getShowList(-5);
      expect(shows[0].season).to.be.equal(2);
      expect(shows[0].episode).to.be.equal(4);
    });
  });
});
