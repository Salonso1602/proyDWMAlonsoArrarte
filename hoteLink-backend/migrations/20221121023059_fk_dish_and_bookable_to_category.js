const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable(tables.BOOKABLE, (table) => {
      table.integer('categoryId').unsigned().references('id').inTable(tables.CATEGORY);
    })
    .alterTable(tables.DISH, (table) => {
      table.integer('categoryId').unsigned().references('id').inTable(tables.CATEGORY);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable(tables.BOOKABLE, (table) => {
      table.dropForeign('categoryId');
      table.dropColumn('categoryId');
    })
    .alterTable(tables.DISH, (table) => {
      table.dropForeign('categoryId');
      table.dropColumn('categoryId');
    });
};
