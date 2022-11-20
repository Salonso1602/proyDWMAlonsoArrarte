const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.LOCATION)
    .createTable(tables.LOCATION, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable().unique();
      table.string('shortDescription', 100).notNullable();
      table.string('longDescription', 1000).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.LOCATION);
};
