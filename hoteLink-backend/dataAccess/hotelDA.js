const Hotel = require('../entities/hotel');

module.exports = {
    getListings : async () => {
        //devuelve un array con todos los {hotelId, hotelName}. Puede ser vacio.
    },
    getHotelWithId : async (hotelId) => {
        //devuelve un Hotel que tenga la id, si no hay que devuelva undefined.
    }
}