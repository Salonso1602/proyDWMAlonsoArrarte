const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

const Hotel = require('../entities/hotel');
const Location = require('../entities/location');
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
            resultDB = await knex(tables.HOTEL)
                .innerJoin(
                    tables.LOCATION,
                    tables.LOCATION + '.id',
                    tables.HOTEL + '.locationId'
                )
                .where(tables.HOTEL + '.id', hotelId)
                .options({ nestTables: true });
        }
        catch (error) {
            throw new UnknownDbError(tables.HOTEL, error);
        }

        if (resultDB.length === 0) {
            throw new UniqueNotFoundError(tables.HOTEL, { hotelId });
        }

        const hotelDB = resultDB[0];

        return new Hotel({
            id: hotelDB[tables.HOTEL].id,
            name: hotelDB[tables.HOTEL].name,
            address: hotelDB[tables.HOTEL].address,
            contactInfo: hotelDB[tables.HOTEL].contactInfo,
            attentionHours: hotelDB[tables.HOTEL].attentionHours,
            shortDescription: hotelDB[tables.HOTEL].shortDescription,
            longDescription: hotelDB[tables.HOTEL].longDescription,
            location: new Location({
                id: hotelDB[tables.LOCATION].id,
                name: hotelDB[tables.LOCATION].name,
                shortDescription: hotelDB[tables.LOCATION].shortDescription,
                longDescription: hotelDB[tables.LOCATION].longDescription
            })
        });
    }
}