const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');
  
  await knex(tables.USER).del();
  await knex(tables.LOCATION).del();
  await knex(tables.HOTEL).del();
  await knex(tables.IMAGE).del();
  await knex(tables.CATEGORY).del();
  await knex(tables.NEWS).del();
  await knex(tables.BOOKABLE).del();
  await knex(tables.EVENT).del();
  await knex(tables.ACTIVITY).del();
  await knex(tables.TIME_OF_ACTIVITY).del();
  await knex(tables.DISH).del();
  await knex(tables.BOOKABLE_IN_NEWS).del();
  await knex(tables.DISH_IN_NEWS).del();
  await knex(tables.DISH_AVAILABILITY_PER_HOTEL).del();
  await knex(tables.BOOKABLE_AVAILABILITY_PER_HOTEL).del();

  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');
};
