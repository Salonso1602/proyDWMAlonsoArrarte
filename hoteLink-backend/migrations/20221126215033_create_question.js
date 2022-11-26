
const tables = require("../db/tables");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(tables.QUESTION, (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().notNullable().references('id').inTable(tables.USER);
    table.integer('bookableId').unsigned().notNullable().references('id').inTable(tables.BOOKABLE);
    table.string('question', 1000).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.QUESTION);
};
