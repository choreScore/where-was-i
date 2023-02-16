/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tv_shows').del();
  await knex('tv_shows').insert([
    { show_id: 'sp123', name: 'Sopranos' },
    { show_id: 'bb123', name: 'Breaking Bad' },
    { show_id: 'to123', name: 'The Offer' },
    { show_id: 'far123', name: 'Fargo' },
    { show_id: 'td123', name: 'True Detective' },
  ]);
};
