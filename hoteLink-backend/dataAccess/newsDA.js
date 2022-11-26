const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

const News = require('../entities/news');
const Dish = require('../entities/dish');
const Activity = require('../entities/activity');
const Event = require('../entities/event');
const newsTypes = require('../enums/newsTypes');
const InconsistentDataError = require('./errors/inconsistent-data');

module.exports = {
    getAllNews : async (hotelId) => {
        let resultDB;
        
        const dishesInNewsSubqueryName = 'dishesInNews';
        const bookablesInNewsSubqueryName = 'bookablesInNews';
        try {
            const dishesInNews = knex(tables.DISH_IN_NEWS)
                .innerJoin(
                    tables.DISH,
                    tables.DISH_IN_NEWS + '.dishId',
                    tables.DISH + '.id'
                )
                .as(dishesInNewsSubqueryName);

            const bookablesInNews = knex.queryBuilder()
                .select(
                    tables.BOOKABLE + '.id',
                    tables.BOOKABLE + '.name',
                    tables.BOOKABLE + '.place',
                    tables.ACTIVITY + '.bookableId as activityId',
                    tables.EVENT + '.bookableId as eventId',
                    tables.BOOKABLE_IN_NEWS + '.newsId'
                )
                .from(tables.BOOKABLE)
                .innerJoin(
                    tables.BOOKABLE_IN_NEWS,
                    tables.BOOKABLE + '.id',
                    tables.BOOKABLE_IN_NEWS + '.bookableId'
                )
                .leftJoin(
                    tables.ACTIVITY,
                    tables.ACTIVITY + '.bookableId',
                    tables.BOOKABLE + '.id'
                )
                .leftJoin(
                    tables.EVENT,
                    tables.EVENT + '.bookableId',
                    tables.BOOKABLE + '.id'
                )
                .as(bookablesInNewsSubqueryName);

            resultDB = await knex(tables.NEWS_IN_HOTEL)
                .where('hotelId', hotelId)
                .innerJoin(
                    tables.NEWS,
                    tables.NEWS + '.id',
                    tables.NEWS_IN_HOTEL + '.newsId'
                )
                .leftJoin(
                    dishesInNews,
                    dishesInNewsSubqueryName + '.newsId',
                    tables.NEWS + '.id'
                )
                .leftJoin(
                    bookablesInNews,
                    bookablesInNewsSubqueryName + '.newsId',
                    tables.NEWS + '.id'
                )
                .orderBy(tables.NEWS + '.id', 'desc')
                .options({ nestTables: true });
        }
        catch (error) {
            throw new UnknownDbError(tables.NEWS, error);
        }

        const resultBL = resultDB.map(dbRow => {
            const newsObject = {
                subject: undefined,
                caption: dbRow[tables.NEWS].caption,
                imageId: dbRow[tables.NEWS].imageId,
                type: dbRow[dishesInNewsSubqueryName].id !== null
                    ? newsTypes.Food
                    : dbRow[bookablesInNewsSubqueryName].activityId !== null
                        ? newsTypes.Activity
                        : newsTypes.Event,
            }

            switch (newsObject.type) {
                case newsTypes.Food:
                    newsObject.subject = new Dish({
                        id: dbRow[dishesInNewsSubqueryName].id,
                        name: dbRow[dishesInNewsSubqueryName].name,
                        description: dbRow[dishesInNewsSubqueryName].description,
                        price: dbRow[dishesInNewsSubqueryName].price,
                        serviceTime: dbRow[dishesInNewsSubqueryName].serviceTime,
                    });
                    break;
                case newsTypes.Activity:
                    newsObject.subject = new Activity({
                        id: dbRow[bookablesInNewsSubqueryName].id,
                        name: dbRow[bookablesInNewsSubqueryName].name,
                        place: dbRow[bookablesInNewsSubqueryName].place,
                        weeklyPrice: dbRow[bookablesInNewsSubqueryName].weeklyPrice,
                        timesOfActivity: undefined
                    });
                    break;
                case newsTypes.Event:
                    newsObject.subject = new Event({
                        id: dbRow[bookablesInNewsSubqueryName].id,
                        name: dbRow[bookablesInNewsSubqueryName].name,
                        place: dbRow[bookablesInNewsSubqueryName].place,
                        date: dbRow[bookablesInNewsSubqueryName].date,
                        entranceFee: dbRow[bookablesInNewsSubqueryName].entranceFee
                    });
                    break;
                default:
                    throw new InconsistentDataError(tables.NEWS, 'News type not recognized');
            }

            return new News(newsObject);
        });

        return resultBL;
    }
}