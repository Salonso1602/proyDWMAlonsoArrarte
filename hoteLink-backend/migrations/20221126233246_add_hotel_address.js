const knex = require('../db/conn');

const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable(tables.HOTEL, (table) => {
    table.string('address', 100).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable(tables.HOTEL, (table) => {
    table.dropColumn('address');
  });
};
