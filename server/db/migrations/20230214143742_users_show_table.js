/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_shows', function (table) {
    table
      .integer('user_id')
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table
      .integer('show_id')
      .notNullable()
      .references('show_id')
      .inTable('tv_shows')
      .onDelete('cascade');
    table.integer('season').notNullable();
    table.integer('episode').notNullable();
    table.unique(['user_id', 'show_id'], {
      indexName: 'user_shows_index',
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('user_shows');
};
