const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.NEWS)
    .createTable(tables.NEWS, (table) => {
      table.increments('id').primary();
      table.string('caption', 100).notNullable();
      table.integer('imageId').unsigned().notNullable().references('id').inTable(tables.IMAGE);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.NEWS);
};
