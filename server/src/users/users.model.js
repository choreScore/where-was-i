const config = require('../../knexfile');
const knex = require('knex')(config);
// const { validProps, requiredProps } = require('../util/validation');
//
// const validateProps = validProps(['user_id', 'username', 'password']);
//
// const validateRequired = requiredProps(['user_id', 'username', 'password']);

const USERS_TABLE = 'users';
const TV_SHOWS_TABLE = 'tv_shows';
const USER_SHOW_TABLE = 'user_shows';

module.exports = {
  USERS_TABLE,
  TV_SHOWS_TABLE,
  USER_SHOW_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */

  getShowList(userId) {
    return knex(USERS_TABLE)
      .join(USER_SHOW_TABLE, 'users.user_id', 'user_shows.user_id')
      .join(TV_SHOWS_TABLE, 'user_shows.show_id', 'tv_shows.show_id')
      .select({
        userId: 'users.user_id',
        username: 'users.username',
        showname: 'tv_shows.name',
        show_id: 'tv_shows.show_id',
        season: 'user_shows.season',
        episode: 'user_shows.episode',
      })
      .where('users.user_id', userId);
  },

  async postNewShow(newShowObject) {
    // CHECK IF SHOW IS ON OUR DATABASE
    async function checkExists(showName) {
      const checkExisting = await knex(TV_SHOWS_TABLE)
        .select('name')
        .where('name', showName);
      const resultBoolean = checkExisting.length !== 0 ? true : false;
      return resultBoolean;
    }

    const checkShow = await checkExists(newShowObject.showName);

    //IF IS NOT ADD IT
    if (!checkShow) {
      const allShows = await knex(TV_SHOWS_TABLE).select('*');
      await knex(TV_SHOWS_TABLE).insert({
        show_id: allShows.length + 1,
        name: newShowObject.showName,
      });
    }
    // ELSE JUST ADD TO USER MOVIE TABLE
    const movieId = await knex(TV_SHOWS_TABLE)
      .where('name', newShowObject.showName)
      .returning('show_id');

    return await knex(USER_SHOW_TABLE).insert({
      user_id: newShowObject.user_id,
      show_id: movieId[0].show_id,
      season: newShowObject.season,
      episode: newShowObject.episode,
    });
  },

  async deleteShow(showId, userId) {
    return await knex(USER_SHOW_TABLE)
      .where({ show_id: showId, user_id: userId })
      .del();
  },

  async updateProgress(progressObject) {
    return await knex(USER_SHOW_TABLE)
      .where({
        show_id: progressObject.show_id,
        user_id: progressObject.user_id,
      })
      .update({
        season: progressObject.season,
        episode: progressObject.episode,
      });
  },
  //
  //   /**
  //    * @param {number} id - The customer's id.
  //    * @return {Promise<Object>} A promise that resolves to the customer that matches the id.
  //    */
  //   getById(id) {
  //     return knex
  //       .select({
  //         id: 'id',
  //         lastName: 'last_name',
  //         firstName: 'first_name',
  //         email: 'email',
  //         address: 'address',
  //         city: 'city',
  //         region: 'region',
  //         postalCode: 'postal_code',
  //         country: 'country',
  //       })
  //       .from(USERS_TABLE)
  //       .where({
  //         id: id,
  //       })
  //       .first();
  //   },
  //
  //   /**
  //    * @param {Object} customer - The new customer data to add.
  //    * @return {Promise<number>} A promise that resolves to the id of created customer.
  //    */
  //   create(customer) {
  //     validateRequired(validateProps(customer));
  //     return knex(USERS_TABLE).insert(customer);
  //   },
  //
  //   /**
  //    * @param {number} id - The unique id of the existing customer.
  //    * @param {Object} customer - The customer data to change.
  //    * @return {Promise<number>} A promise that resolves to the id of the updated customer.
  //    */
  //   update(id, customer) {
  //     validateProps(customer);
  //     return knex(USERS_TABLE)
  //       .where({ id: id })
  //       .update(customer)
  //       .returning('id')
  //       .then((result) => result[0].id);
  //   },
};
