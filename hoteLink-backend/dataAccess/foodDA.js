const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');
const UniqueNotFoundError = require('./errors/unique-not-found');

const Dish = require('../entities/dish');

module.exports = {
    getAllFoods : async (queryParams) => {
        let resultDB;
        try {
            const foodsQuery = knex(tables.DISH).options({ nestTables: true });

            if (queryParams.search) {
                foodsQuery.whereILike(tables.DISH + '.name', `%${queryParams.search}%`);
            }

            if (queryParams.categoryIds) {
                foodsQuery.whereIn(
                    tables.DISH + '.categoryId',
                    queryParams.categoryIds.split(',')
                );
            }

            if (queryParams.hotelId) {
                foodsQuery.innerJoin(
                    tables.DISH_AVAILABILITY_PER_HOTEL,
                    tables.DISH_AVAILABILITY_PER_HOTEL + '.dishId',
                    tables.DISH + '.id'
                )
                .where(tables.DISH_AVAILABILITY_PER_HOTEL + '.hotelId', queryParams.hotelId);
            }

            resultDB = await foodsQuery;
        }
        catch (err) {
            throw new UnknownDbError(tables.DISH, err);
        }

        const resultBL = resultDB.map(dbRow => {
            return new Dish({
                id: dbRow[tables.DISH].id,
                name: dbRow[tables.DISH].name,
                description: dbRow[tables.DISH].description,
                price: dbRow[tables.DISH].price,
                serviceTime: dbRow[tables.DISH].serviceTime,
            });
        })

        return resultBL;
    },

    getDishById: async (id) => {
        let resultDB;

        try {
            resultDB = await knex(tables.DISH).where('id', id);
        }
        catch (err) {
            throw new UnknownDbError(tables.DISH, err);
        }

        if (resultDB.length === 0) {
            throw new UniqueNotFoundError(tables.DISH, { id });
        }
        else {
            const dbRow = resultDB[0];
            return new Dish({
                id: dbRow.id,
                name: dbRow.name,
                description: dbRow.description,
                price: dbRow.price,
                serviceTime: dbRow.serviceTime,
            });
        }
    }
}