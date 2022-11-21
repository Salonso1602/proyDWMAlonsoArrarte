const hotelDA = require('../dataAccess/hotelDA')

module.exports = {
    getHotelListings : async () => {
        const resultDA = await hotelDA.getListings();

        if(!resultDA || resultDA.length === 0){
            return undefined;
        } else {
            return resultDA;
        }
    },
    getHotelById : async (hotelId) => {
        const resultDA = await hotelDA.getHotelWithId(hotelId);

        if(!resultDA){
            return undefined;
        } else {
            return resultDA;
        }
    }
}