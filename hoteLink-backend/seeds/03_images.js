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
      url: 'https://i.ibb.co/XZJ2HjK/brocheta-Veg.jpg'
    },
    {
      id: 2,
      url: 'https://i.ibb.co/ZVdhw0k/tree.jpg'
    },
    {
      id: 3,
      url: 'https://i.ibb.co/ZVdhw0k/tree.jpg'
    },
    {
      id: 4,
      url: 'https://i.ibb.co/wzVf1PR/cochabamba.jpg'
    },
    {
      id: 5,
      url: 'https://i.ibb.co/xzMzDWM/gramajont.jpg'
    },
    {
      id: 6,
      url: 'https://i.ibb.co/qd6p9ZQ/spaghetti.jpg'
    },
    {
      id: 7,
      url: 'https://i.ibb.co/4WNyR4G/pizza.jpg'
    },
    {
      id: 8,
      url: 'https://i.ibb.co/vPZw61s/pancakes.jpg'
    },
    {
      id: 9,
      url: 'https://i.ibb.co/vD08mtN/macarrons.jpg'
    },
    {
      id: 10,
      url: 'https://i.ibb.co/F69PnTD/granola.jpg'
    },
    {
      id: 11,
      url: 'https://i.ibb.co/cQ2gTZ1/esparrago-carne.jpg'
    },
    {
      id: 12,
      url: 'https://i.ibb.co/2YPxJKZ/cupcake.jpg'
    },
    {
      id: 13,
      url: 'https://i.ibb.co/Bz3TjjX/cake.jpg'
    },
    {
      id: 14,
      url: 'https://i.ibb.co/DkdJ5kF/bbq.jpg'
    },
    {
      id: 15,
      url: 'https://i.ibb.co/Hd847jH/borgir.jpg'
    },
    {
      id: 16,
      url: 'https://i.ibb.co/cXPM4J7/yoga.jpg'
    },
    {
      id: 17,
      url: 'https://i.ibb.co/MPH26rg/skate.jpg'
    },
    {
      id: 18,
      url: 'https://i.ibb.co/zNdFFRW/rock.jpg'
    },
    {
      id: 19,
      url: 'https://i.ibb.co/Gkr6HqZ/horse2.png'
    },
    {
      id:20,
      url: 'https://i.ibb.co/q1zV29c/horse-riding.jpg'
    },
    {
      id: 21,
      url: 'https://i.ibb.co/H4yFDKD/gym.jpg'
    },
    {
      id: 22,
      url: 'https://i.ibb.co/ngr0w2s/golf.png'
    },
    {
      id: 23,
      url: 'https://i.ibb.co/r0zcfp8/fulvo.jpg'
    },
    {
      id: 24,
      url: 'https://i.ibb.co/C8wJLBY/fisher.jpg'
    },
    {
      id: 25,
      url: 'https://i.ibb.co/BtkpbWG/fogon.jpg'
    }
  ]);
};
