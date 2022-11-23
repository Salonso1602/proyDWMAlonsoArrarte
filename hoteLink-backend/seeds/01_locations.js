const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.LOCATION).del()
  await knex(tables.LOCATION).insert([
    {
      id: 1,
      name: 'Cochabamba',
      shortDescription: 'The short description for Cochabamba',
      longDescription: 'The long description for Cochabamba. The long description for Cochabamba. The long description for Cochabamba. The long description for Cochabamba.The long description for Cochabamba.',
    }
  ]);
};
