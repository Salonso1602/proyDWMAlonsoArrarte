const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

const Hotel = require('../entities/hotel');
const UniqueNotFoundError = require('./errors/unique-not-found');

module.exports = {
    getListings : async () => {
        let resultDB;
        try {
            resultDB = await knex
                .select(
                    tables.HOTEL + '.id',
                    tables.HOTEL + '.name',
                    tables.LOCATION + '.name as locationName',)
                .from(tables.HOTEL)
                .innerJoin(tables.LOCATION);
        }
        catch (error) {
            throw new UnknownDbError(tables.HOTEL, error);
        }

        return resultDB;
    },
    getHotelWithId : async (hotelId) => {
        let resultDB;
        try {
            resultDB = await knex(tables.HOTEL).where('id', hotelId);
        }
        catch (error) {
            throw new UnknownDbError(tables.HOTEL, error);
        }

        if (resultDB.length === 0) {
            throw new UniqueNotFoundError(tables.HOTEL, { hotelId });
        }

        return resultDB[0];
    }
}