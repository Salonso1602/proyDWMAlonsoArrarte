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
      password: '$2a$12$D2CkIx/GI1ZFj0VOkklqrOl9EIdW27L5yUL/tlYbGLCUsesJv2GJ2'
    }
  ]);
};
