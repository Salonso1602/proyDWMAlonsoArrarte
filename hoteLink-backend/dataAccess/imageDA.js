const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');
const UniqueNotFoundError = require('./errors/unique-not-found');

const Image = require('../entities/image')

module.exports = {
    getImage : async (imageId) => {
        let result;
        try {
            result = await knex(tables.IMAGE).where('id', imageId);
        }
        catch (error) {
            throw new UnknownDbError(tables.IMAGE, error);
        }

        if (result.length === 0) {
            throw new UniqueNotFoundError(tables.IMAGE, { imageId });
        }

        result = result[0];
        return new Image({
            id: result.id,
            path: result.url
        });
    }
}