const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.BOOKABLE_AVAILABILITY_PER_HOTEL)
    .createTable(tables.BOOKABLE_AVAILABILITY_PER_HOTEL, (table) => {
      table.integer('bookableId').unsigned().notNullable().references('id').inTable(tables.BOOKABLE);
      table.integer('hotelId').unsigned().notNullable().references('id').inTable(tables.HOTEL);
      table.primary(['bookableId', 'hotelId']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.BOOKABLE_AVAILABILITY_PER_HOTEL);
};
