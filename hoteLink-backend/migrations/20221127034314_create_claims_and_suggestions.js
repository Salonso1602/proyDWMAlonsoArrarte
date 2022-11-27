const knex = require('../db/conn');

const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(tables.CLAIMS_AND_SUGGESTIONS, (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().notNullable().references('id').inTable(tables.USER);
    table.string('requestText', 1000).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.CLAIMS_AND_SUGGESTIONS);
};
