const knex = require('../db/conn');

const tables = require('../db/tables');
const UniqueNotFoundError = require('./errors/unique-not-found');
const UnknownDbError = require('./errors/unknown-db');

const Event = require('../entities/event');

module.exports = {
    getAllEvents : async (queryParams) => {
        let resultDB = {};
        try {
            const eventsQuery = knex(tables.EVENT)
                .innerJoin(
                    tables.BOOKABLE,
                    tables.BOOKABLE + '.id',
                    tables.EVENT + '.bookableId')
                .innerJoin(
                    tables.CATEGORY,
                    tables.CATEGORY + '.id',
                    tables.BOOKABLE + '.categoryId')
                .options({ nestTables: true });

                if (queryParams.search) {
                    eventsQuery.whereILike(tables.BOOKABLE + '.name', `%${queryParams.search}%`);
                }
                
                if (queryParams.categoryIds) {
                    eventsQuery.whereIn(
                        tables.BOOKABLE + '.categoryId',
                        queryParams.categoryIds.split(',')
                    );
                }

            resultDB.events = await eventsQuery;
        }
        catch (err) {
            throw new UnknownDbError(tables.EVENT, err);
        }

        const resultBL = resultDB.events.map(dbRow => {
            return new Event({
                id: dbRow[tables.BOOKABLE].id,
                name: dbRow[tables.BOOKABLE].name,
                place: dbRow[tables.BOOKABLE].place,
                reservationLimit: dbRow[tables.BOOKABLE].reservationLimit,
                date: dbRow[tables.EVENT].date,
                entranceFee: dbRow[tables.EVENT].entranceFee
            });
        });

        return resultBL;
    },

    getEventById: async (id) => {
        let result;
        try {
            result = await knex(tables.EVENT)
                .innerJoin(
                    tables.BOOKABLE,
                    tables.BOOKABLE + '.id',
                    tables.EVENT + '.bookableId')
                .innerJoin(
                    tables.CATEGORY,
                    tables.CATEGORY + '.id',
                    tables.BOOKABLE + '.categoryId')
                .where(tables.BOOKABLE + '.id', id)
                .options({ nestTables: true });;
        }
        catch (error) {
            throw new UnknownDbError(tables.EVENT, error);
        }

        if (result.length === 0) {
            throw new UniqueNotFoundError(tables.EVENT, { id });
        }
        else {
            const dbRow = result[0];
            return new Event({
                id: dbRow[tables.BOOKABLE].id,
                name: dbRow[tables.BOOKABLE].name,
                place: dbRow[tables.BOOKABLE].place,
                reservationLimit: dbRow[tables.BOOKABLE].reservationLimit,
                date: dbRow[tables.EVENT].date,
                entranceFee: dbRow[tables.EVENT].entranceFee
            });
        }
    },
}