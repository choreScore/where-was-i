/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('auth', function (table) {
    table.string('auth_token', 256).primary().notNullable();
    table
      .integer('user_id')
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table.bigint('expire_time').notNullable();
    table.bigint('last_login').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('auth');
};
