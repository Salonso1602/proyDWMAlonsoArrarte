const { TIME_OF_ACTIVITY } = require("../db/tables");
const tables = require("../db/tables");
const DaysOfWeek = require("../enums/days-of-week");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists(TIME_OF_ACTIVITY)
    .createTable(tables.TIME_OF_ACTIVITY, (table) => {
      table.increments('id').primary();
      table.integer('activityId').unsigned().notNullable().references('bookableId').inTable(tables.ACTIVITY);
      table.datetime('startTime').notNullable();
      table.datetime('endTime').notNullable();
      table.enum('dayOfWeek', Object.values(DaysOfWeek)).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable(tables.TIME_OF_ACTIVITY);
};
