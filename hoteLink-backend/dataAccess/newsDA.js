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
        try {
            const dishesInNews = knex(tables.DISH_IN_NEWS)
                .innerJoin(
                    tables.DISH,
                    tables.DISH_IN_NEWS + '.dishId',
                    tables.DISH + '.id'
                )
                .as('dishesInNews');

            const bookablesInNews = knex.queryBuilder()
                .select(
                    tables.BOOKABLE + '.id',
                    tables.BOOKABLE + '.name',
                    tables.BOOKABLE + '.place',
                    tables.ACTIVITY + '.bookableId as activityId',
                    tables.EVENT + '.bookableId as eventId'
                )
                .from(tables.BOOKABLE)
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
                .as('bookablesInNews');

            resultDB = await knex(tables.NEWS_IN_HOTEL)
                .where('hotelId', hotelId)
                .innerJoin(
                    tables.NEWS,
                    tables.NEWS + '.id',
                    tables.NEWS_IN_HOTEL + '.newsId'
                )
                .leftJoin(
                    dishesInNews,
                    dishesInNews._single.as + '.newsId',
                    tables.NEWS + '.id'
                )
                .leftJoin(
                    bookablesInNews,
                    dishesInNews._single.as + '.newsId',
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
                type: Object.entries(dbRow[tables.DISH_IN_NEWS]).length
                    ? newsTypes.Food
                    : Object.entries(dbRow[tables.ACTIVITY]).length
                        ? newsTypes.Activity
                        : newsTypes.Event,
            }

            switch (newsObject.type) {
                case newsTypes.Food:
                    newsObject.subject = new Dish({
                        id: dbRow[tables.DISH].id,
                        name: dbRow[tables.DISH].name,
                        description: dbRow[tables.DISH].description,
                        price: dbRow[tables.DISH].price,
                        serviceTime: dbRow[tables.DISH].serviceTime,
                    });
                    break;
                case newsTypes.Activity:
                    newsObject.subject = new Activity({
                        id: dbRow[tables.BOOKABLE].id,
                        name: dbRow[tables.BOOKABLE].name,
                        place: dbRow[tables.BOOKABLE].place,
                        weeklyPrice: dbRow[tables.ACTIVITY].weeklyPrice,
                        timesOfActivity: undefined
                    });
                    break;
                case newsTypes.Event:
                    newsObject.subject = new Event({
                        id: dbRow[tables.BOOKABLE].id,
                        name: dbRow[tables.BOOKABLE].name,
                        place: dbRow[tables.BOOKABLE].place,
                        date: dbRow[tables.EVENT].date,
                        entranceFee: dbRow[tables.EVENT].entranceFee
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