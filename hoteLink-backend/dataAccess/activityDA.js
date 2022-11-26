const knex = require('../db/conn');

const tables = require('../db/tables');
const UniqueNotFoundError = require('./errors/unique-not-found');
const UnknownDbError = require('./errors/unknown-db');

const Activity = require('../entities/activity');

module.exports = {
    getAllActivities : async (queryParams) => {
        let resultDB = {};
        try {
            const activitiesQuery = knex(tables.ACTIVITY)
                .innerJoin(
                    tables.BOOKABLE,
                    tables.BOOKABLE + '.id',
                    tables.ACTIVITY + '.bookableId')
                .innerJoin(
                    tables.CATEGORY,
                    tables.CATEGORY + '.id',
                    tables.BOOKABLE + '.categoryId')
                .options({ nestTables: true });

                if (queryParams.search) {
                    activitiesQuery.whereILike(tables.BOOKABLE + '.name', `%${queryParams.search}%`);
                }
                
                if (queryParams.categoryIds) {
                    activitiesQuery.whereIn(
                        tables.BOOKABLE + '.categoryId',
                        queryParams.categoryIds.split(',')
                    );
                }

            resultDB.activities = await activitiesQuery;
            resultDB.timesOfActivities = await knex(tables.TIME_OF_ACTIVITY)
                .whereIn('activityId', resultDB.activities.map(row => row.bookable.id));
        }
        catch (err) {
            throw new UnknownDbError(tables.ACTIVITY, err);
        }

        const resultBL = resultDB.activities.map(dbRow => {
            return new Activity({
                id: dbRow[tables.BOOKABLE].id,
                name: dbRow[tables.BOOKABLE].name,
                place: dbRow[tables.BOOKABLE].place,
                weeklyPrice: dbRow[tables.ACTIVITY].weeklyPrice,
                timesOfActivity:
                    resultDB.timesOfActivities
                        .filter(
                            timeOfActivity => timeOfActivity.activityId === dbRow[tables.BOOKABLE].id
                        ).map(({startTime, endTime, dayOfWeek}) => {
                            return {
                                startTime,
                                endTime,
                                dayOfWeek
                            };
                        })
            });
        });

        return resultBL;
    },

    getActivityWithId: async (id) => {
        let result;
        try {
            result = await knex(tables.ACTIVITY)
                .innerJoin(
                    tables.BOOKABLE,
                    tables.BOOKABLE + '.id',
                    tables.ACTIVITY + '.bookableId')
                .innerJoin(
                    tables.CATEGORY,
                    tables.CATEGORY + '.id',
                    tables.BOOKABLE + '.categoryId')
                .innerJoin(
                    tables.TIME_OF_ACTIVITY,
                    tables.TIME_OF_ACTIVITY + '.activityId',
                    tables.ACTIVITY + '.bookableId')
                .where(tables.BOOKABLE + '.id', id)
                .options({ nestTables: true });
        }
        catch (error) {
            throw new UnknownDbError(tables.ACTIVITY, error);
        }

        if (result.length === 0) {
            throw new UniqueNotFoundError(tables.ACTIVITY, { id });
        }
        else {
            const dbRow = result[0];
            return new Activity({
                id: dbRow[tables.BOOKABLE].id,
                name: dbRow[tables.BOOKABLE].name,
                place: dbRow[tables.BOOKABLE].place,
                weeklyPrice: dbRow[tables.ACTIVITY].weeklyPrice,
                timesOfActivity: 
                    result
                        .map(dbRow => dbRow[tables.TIME_OF_ACTIVITY])
                        .map(({startTime, endTime, dayOfWeek}) => {
                            return {
                                startTime,
                                endTime,
                                dayOfWeek
                            };
                        })
            });
        }
    },

}