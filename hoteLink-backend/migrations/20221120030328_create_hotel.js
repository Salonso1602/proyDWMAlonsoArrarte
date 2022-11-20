const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.HOTEL)
    .createTable(tables.HOTEL, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable().unique();
      table.integer('locationId').unsigned().notNullable().references('id').inTable(tables.LOCATION);
      table.string('attentionHours', 100).notNullable();
      table.string('contactInfo', 100).notNullable();
      table.string('shortDescription', 100).notNullable();
      table.string('longDescription', 1000).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.HOTEL);
};
