const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.NEWS_IN_HOTEL)
    .createTable(tables.NEWS_IN_HOTEL, (table) => {
      table.integer('newsId').unsigned().notNullable().references('id').inTable(tables.NEWS);
      table.integer('hotelId').unsigned().notNullable().references('id').inTable(tables.HOTEL);
      table.primary(['newsId', 'hotelId']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.NEWS_IN_HOTEL);
};
