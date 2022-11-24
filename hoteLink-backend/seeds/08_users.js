const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.USER).del()
  await knex(tables.USER).insert([
    {
      id: 1,
      email: 'user1@yopmail.com',
      // Hash Bcrypt de 12 rondas para '1234'
      password: '$2b$12$KOSCJ2wlteyvMrkiNtVow.1jS2iRbnps7kE1e7PcDV5Ya2ddHNrFC'
    }
  ]);
};
