const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.DISH_IN_NEWS)
    .createTable(tables.DISH_IN_NEWS, (table) => {
      table.integer('dishId').unsigned().notNullable().references('id').inTable(tables.DISH);
      table.integer('newsId').unsigned().notNullable().references('id').inTable(tables.NEWS);
      table.primary(['dishId', 'newsId']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.DISH_IN_NEWS);
};
