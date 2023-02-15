/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id').primary();
    table.string('username', 32).notNullable().unique();
    table.string('password', 40).notNullable();
    table
      .string('email', 32)
      .unique() // This is a constraint that prevents duplicate emails in the table
      .notNullable()
      .index(); // Adding an index makes searching by email faster
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('users');
};
