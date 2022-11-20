const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(tables.DISH)
    .createTable(tables.DISH, (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.string('description', 1000);
      table.double('price').notNullable();
      table.string('serviceTime', 100);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.DISH);
};
