/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      user_id: 1,
      username: 'tarantino',
      password: 'django',
      email: 'quentin@gmail.com',
    },
    {
      user_id: 2,
      username: 'kubrick',
      password: 'shining',
      email: 'stanley@gmail.com',
    },
    {
      user_id: 3,
      username: 'anderson',
      password: 'hotel',
      email: 'wes@gmail.com',
    },
    {
      user_id: 4,
      username: 'spilberg',
      password: 'et',
      email: 'steven@gmail.com',
    },
    {
      user_id: 5,
      username: 'nolan',
      password: 'tenet',
      email: 'christopher@gmail.com',
    },
  ]);
};
