const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.DISH).del();
  await knex(tables.DISH_AVAILABILITY_PER_HOTEL).del();

  await knex(tables.DISH).insert([
    {
      id: 1,
      name: 'Revuelto gramajo',
      description: 'Revuelto de huevo con queso, jamón y tomate',
      price: 10,
      serviceTime: '11:00 AM - 15:00 PM',
      categoryId: 1
    }
  ]);
  await knex(tables.DISH_AVAILABILITY_PER_HOTEL).insert([
    {
      dishId: 1,
      hotelId: 1
    }
  ]);
};
