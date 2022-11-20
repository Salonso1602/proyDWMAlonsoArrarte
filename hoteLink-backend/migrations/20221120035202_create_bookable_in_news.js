const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.BOOKABLE_IN_NEWS)
    .createTable(tables.BOOKABLE_IN_NEWS, (table) => {
      table.integer('bookableId').unsigned().notNullable().references('id').inTable(tables.BOOKABLE);
      table.integer('newsId').unsigned().notNullable().references('id').inTable(tables.NEWS);
      table.primary(['bookableId', 'newsId']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.BOOKABLE_IN_NEWS);
};
