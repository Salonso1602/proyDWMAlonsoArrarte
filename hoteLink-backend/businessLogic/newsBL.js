const News = require('../entities/news');
const newsDA = require('../db/dataAccess/newsDA');

module.exports = {
    getAllFoods :  async () => {
        let result = [];

        const queryRes = await newsDA.getAllNews();
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            queryRes.forEach(elem => {
                result.push(new News(elem.subject, elem.type, elem.caption, elem.imageId))
            });
            return result;
        }
    },
}