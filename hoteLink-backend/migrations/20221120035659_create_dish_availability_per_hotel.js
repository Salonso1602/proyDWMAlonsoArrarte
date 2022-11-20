const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.DISH_AVAILABILITY_PER_HOTEL)
    .createTable(tables.DISH_AVAILABILITY_PER_HOTEL, (table) => {
      table.integer('dishId').unsigned().notNullable().references('id').inTable(tables.DISH);
      table.integer('hotelId').unsigned().notNullable().references('id').inTable(tables.HOTEL);
      table.primary(['dishId', 'hotelId']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.DISH_AVAILABILITY_PER_HOTEL);
};
