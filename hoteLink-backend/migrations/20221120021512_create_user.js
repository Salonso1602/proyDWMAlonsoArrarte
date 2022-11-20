const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.USER)
    .createTable(tables.USER, (table) => {
      table.increments('id').primary();
      table.string('email', 100).notNullable().unique();
      table.string('password', 100).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.USER);
};
