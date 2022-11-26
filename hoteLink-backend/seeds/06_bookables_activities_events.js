const tables = require('../db/tables');
const dayOfWeek = require('../enums/days-of-week');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tables.TIME_OF_ACTIVITY).del();
  await knex(tables.ACTIVITY).del();
  await knex(tables.EVENT).del();
  await knex(tables.BOOKABLE_AVAILABILITY_PER_HOTEL).del();
  await knex(tables.BOOKABLE).del();

  await knex(tables.BOOKABLE).insert([
    {
      id: 1,
      name: 'Tour por los suburbios',
      place: 'Camino Perimetral Km 5',
      categoryId: 2
    },
    {
      id: 2,
      name: 'Clases de equitación - Nivel Principiante',
      place: 'Establo "Mi Potro"',
      categoryId: 2
    }
  ]);
  await knex(tables.BOOKABLE_AVAILABILITY_PER_HOTEL).insert([
    {
      bookableId: 1,
      hotelId: 1
    },
    {
      bookableId: 2,
      hotelId: 1
    }
  ]);
  await knex(tables.EVENT).insert([
    {
      bookableId: 1,
      date: new Date(2022, 11, 16, 9, 0),
      entranceFee: 25
    }
  ]);
  await knex(tables.ACTIVITY).insert([
    {
      bookableId: 2,
      weeklyPrice: 19
    }
  ]);
  await knex(tables.TIME_OF_ACTIVITY).insert([
    {
      id: 1,
      activityId: 2,
      dayOfWeek: dayOfWeek.Monday,
      startTime: new Date(2000, 0, 1, 16, 0),
      endTime: new Date(2000, 0, 1, 17, 0)
    },
    {
      id: 2,
      activityId: 2,
      dayOfWeek: dayOfWeek.Thursday,
      startTime: new Date(2000, 0, 1, 18, 0),
      endTime: new Date(2000, 0, 1, 19, 0)
    }
  ]);
};
