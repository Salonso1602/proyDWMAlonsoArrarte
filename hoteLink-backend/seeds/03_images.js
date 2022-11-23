const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.IMAGE).del()
  await knex(tables.IMAGE).insert([
    {
      id: 1,
      url: 'http://localhost:4200/assets/images/foods/brochetaVeg.jpg'
    },
    {
      id: 2,
      url: 'http://localhost:4200/assets/images/tree.jpg'
    },
    {
      id: 3,
      url: 'http://localhost:4200/assets/images/tree.jpg'
    },
    {
      id: 4,
      url: 'http://localhost:4200/assets/images/cochabamba.jpg'
    },
    {
      id: 5,
      url: 'http://localhost:4200/assets/images/foot/gramajont.jpg'
    }
  ]);
};
