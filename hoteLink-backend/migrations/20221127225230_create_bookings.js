const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(tables.BOOKINGS, (table) => {
    table.increments('id').primary();
    table.integer('bookableId').unsigned().notNullable().references('id').inTable(tables.BOOKABLE);
    table.integer('userId').unsigned().notNullable().references('id').inTable(tables.USER);
    table.integer('amountPeople').unsigned().notNullable();
    table.double('finalPrice').unsigned().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.BOOKINGS);
};
