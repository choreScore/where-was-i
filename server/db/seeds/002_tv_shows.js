/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tv_shows').del();
  await knex('tv_shows').insert([
    { show_id: 1, name: 'Sopranos' },
    { show_id: 2, name: 'Breaking Bad' },
    { show_id: 3, name: 'The Offer' },
    { show_id: 4, name: 'Fargo' },
    { show_id: 5, name: 'True Detective' },
  ]);
};
