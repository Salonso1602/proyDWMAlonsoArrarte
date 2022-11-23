const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.NEWS).del();

  await knex(tables.NEWS).insert([
    {
      id: 1,
      caption: 'La mejor forma de reencontrarse',
      imageId: 3
    },
    {
      id: 2,
      caption: 'Conocer la historia de un lugar',
      imageId: 4
    },
    {
      id: 3,
      caption: 'Exquisita entrada tradicional',
      imageId: 5
    }
  ]);
};
