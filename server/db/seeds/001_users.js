/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { user_id: 1, username: 'tarantino', password: 'test' },
    { user_id: 2, username: 'kubrick', password: 'test' },
    { user_id: 3, username: 'anderson', password: 'test' },
    { user_id: 4, username: 'spilberg', password: 'test' },
    { user_id: 5, username: 'nolan', password: 'test' },
  ]);
};
