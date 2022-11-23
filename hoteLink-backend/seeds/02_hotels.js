const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.HOTEL).del()
  await knex(tables.HOTEL).insert([
    {
      id: 1,
      name: 'Duncan Hill Hotel',
      locationId: 1,
      attentionHours: '6:00 AM - 12:00 AM',
      contactInfo: 'Phone: 555-555-5555',
      shortDescription: 'The short description for Duncan Hill Hotel',
      longDescription: 'The long description for Duncan Hill Hotel. The long description for Duncan Hill Hotel. The long description for Duncan Hill Hotel. The long description for Duncan Hill Hotel.The long description for Duncan Hill Hotel.',
    }
  ]);
};
