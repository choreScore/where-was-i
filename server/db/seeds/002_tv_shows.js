/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tv_shows').del();
  await knex('tv_shows').insert([
    { show_id: 'sp123', name: 'Sopranos', url:'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg' },
    { show_id: 'bb123', name: 'Breaking Bad',url:'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg' },
    { show_id: 'to123', name: 'The Offer',url:'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg' },
    { show_id: 'far123', name: 'Fargo',url:'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg' },
    { show_id: 'td123', name: 'True Detective',url:'https://image.tmdb.org/t/p/original/nZIIOs06YigBnvmlJ2hxZeA8eTO.jpg' },
  ]);
};
