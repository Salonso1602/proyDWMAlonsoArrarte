const tables = require('../db/tables');
const categoryTypes = require('../enums/categoryTypes');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.CATEGORY).del()
  await knex(tables.CATEGORY).insert([
    {
      id: 1,
      name: 'Vegetariana',
      type: categoryTypes.Food,
      imageId: 1
    },
    {
      id: 2,
      name: 'Naturaleza',
      type: categoryTypes.Activity,
      imageId: 2
    }
  ]);
};
