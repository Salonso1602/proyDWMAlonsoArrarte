const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

module.exports = {
    book : async (bookableId, userId, amountPeople, until, finalPrice) => {
        let result;
        try {
            result = await knex(tables.BOOKINGS)
                .insert({
                    bookableId,
                    userId,
                    amountPeople,
                    until,
                    finalPrice
                });
        }
        catch (err) {
            throw new UnknownDbError(tables.BOOKINGS, err);
        }

        return result;
    },

    getRemainingPlaces: async (bookableId) => {
        let reservationLimit;
        let amountOfReservations;
        try {
            const reservationLimitQuery = knex(tables.BOOKABLE)
                .select('reservationLimit')
                .where('id', bookableId);

            const amountOfReservationsQuery = knex(tables.BOOKINGS)
                .sum('amountPeople as total')
                .where('bookableId', bookableId);

            [reservationLimit, amountOfReservations] = await Promise.all([
                reservationLimitQuery,
                amountOfReservationsQuery
            ]).then(result => {
                return [
                    result[0][0].reservationLimit,
                    result[1][0].total ?? 0
                ];
            })
        }
        catch (err) {
            throw new UnknownDbError(tables.BOOKABLE, err);
        }

        return reservationLimit - amountOfReservations;
    }
}