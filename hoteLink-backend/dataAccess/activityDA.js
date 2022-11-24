const knex = require('knex').knex;

const tables = require('../db/tables');
const UniqueNotFoundError = require('./errors/unique-not-found');
const UnknownDbError = require('./errors/unknown-db');

const Activity = require('../entities/activity');

module.exports = {
    getAllActivities : async (queryParams) => {
        let resultDB = {};
        try {
            resultDB.activities = await knex(tables.ACTIVITY)
                .innerJoin(
                    tables.BOOKABLE,
                    tables.BOOKABLE + '.id',
                    tables.ACTIVITY + '.bookableId')
                .innerJoin(
                    tables.CATEGORY,
                    tables.CATEGORY + '.id',
                    tables.ACTIVITY + '.categoryId')
                .whereILike(tables.BOOKABLE + '.name', `%${queryParams.name}%`)
                .whereIn(tables.BOOKABLE + '.categoryId', queryParams.categoryIds.split(','))

            resultDB.timesOfActivities = await knex(tables.TIME_OF_ACTIVITY)
                .whereIn('activityId', resultDB.activities.map(activity => activity.id));
        }
        catch (err) {
            throw new UnknownDbError(tables.ACTIVITY, err);
        }

        const resultBL = resultDB.activities.map(activityDB => {
            return new Activity({
                id: activityDB.id,
                name: activityDB.name,
                place: activityDB.place,
                weeklyPrice: activityDB.weeklyPrice,
                timesOfActivity:
                    resultDB.timesOfActivities
                        .filter(
                            timeOfActivity => timeOfActivity.activityId === activityDB.id
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
                    tables.ACTIVITY + '.categoryId')
                .innerJoin(
                    tables.TIME_OF_ACTIVITY,
                    tables.TIME_OF_ACTIVITY + '.activityId',
                    tables.ACTIVITY + '.id')
                .where(tables.BOOKABLE + '.id', id);
        }
        catch (error) {
            throw new UnknownDbError(tables.ACTIVITY, error);
        }

        if (!result.length === 0) {
            throw new UniqueNotFoundError(tables.ACTIVITY, { id });
        }
        else {
            const dbRow = result[0];
            return new Activity({
                id: dbRow.id,
                name: dbRow.name,
                place: dbRow.place,
                weeklyPrice: dbRow.weeklyPrice,
                timesOfActivity: 
                    result.map(({startTime, endTime, dayOfWeek}) => {
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