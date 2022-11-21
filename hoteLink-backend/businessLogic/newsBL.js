const News = require('../entities/news');
const newsDA = require('../dataAccess/newsDA');

module.exports = {
    getAllFoods :  async (hotelId) => {
        let result = [];

        const resultDA = await newsDA.getAllNews(hotelId);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            resultDA.forEach(elem => {
                result.push(new News(elem.subject, elem.type, elem.caption, elem.imageId))
            });
            return result;
        }
    },
}