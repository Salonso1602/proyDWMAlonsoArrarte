const Food = require('../entities/dish');
const foodDA = require('../dataAccess/foodDA');

module.exports = {
    getAllFoods :  async (queryParams) => {
        const resultDA = await foodDA.getAllFoods(queryParams);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA;
        }
    },
}