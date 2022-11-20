const tables = require("../db/tables");
const categoryTypes = require("../enums/categoryTypes");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.CATEGORY)
    .createTable(tables.CATEGORY, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.enum('type', Object.values(categoryTypes)).notNullable();
      table.integer('imageId').unsigned().notNullable().references('id').inTable(tables.IMAGE);
      table.unique(['name', 'type']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.CATEGORY);
};
