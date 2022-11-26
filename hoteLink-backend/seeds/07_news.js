const tables = require('../db/tables');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.NEWS).del();
  await knex(tables.NEWS_IN_HOTEL).del();
  await knex(tables.DISH_IN_NEWS).del();
  await knex(tables.BOOKABLE_IN_NEWS).del();

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

  await knex(tables.NEWS_IN_HOTEL).insert([
    {
      newsId: 1,
      hotelId: 1
    },
    {
      newsId: 2,
      hotelId: 1
    },
    {
      newsId: 3,
      hotelId: 1
    }
  ]);
  
  await knex(tables.BOOKABLE_IN_NEWS).insert([
    {
      bookableId: 1,
      newsId: 1
    },
    {
      bookableId: 2,
      newsId: 2
    }
  ]);
  
  await knex(tables.DISH_IN_NEWS).insert([
    {
      dishId: 1,
      newsId: 3
    }
  ]);
};
