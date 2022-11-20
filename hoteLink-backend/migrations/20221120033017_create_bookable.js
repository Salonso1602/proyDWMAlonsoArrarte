const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.BOOKABLE)
    .createTable(tables.BOOKABLE, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.string('place', 100).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.BOOKABLE);
};
