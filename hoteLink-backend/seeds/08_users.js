const tables = require('../db/tables');
const bcrypt = require('bcrypt');

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
      password: bcrypt.hashSync('1234', 12),
    }
  ]);
};
