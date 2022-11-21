const News = require('../entities/news');
const newsDA = require('../dataAccess/newsDA');

module.exports = {
    getAllFoods :  async (hotelId) => {
        const resultDA = await newsDA.getAllNews(hotelId);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA;
        }
    },
}