const knex = require('../db/conn');

const tables = require('../db/tables');
const UniqueNotFoundError = require('./errors/unique-not-found');
const UnknownDbError = require('./errors/unknown-db');

const User = require('../entities/user');

module.exports = {
    getUserByEmail : async (email) => {
        let result;
        try {
            result = await knex(tables.USER)
                .where('email', email);
        }
        catch (err) {
            throw new UnknownDbError(tables.USER, err);
        }

        if (result.length === 0) {
            throw new UniqueNotFoundError(tables.USER, {email});
        }
        else {
            const userDB = result[0];
            return new User({
                id: userDB.id,
                email: userDB.email,
                password: userDB.password
            })
        }
    }
}