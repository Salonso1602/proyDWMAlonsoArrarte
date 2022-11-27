const foodDA = require('../dataAccess/foodDA');
const categoriesDA = require('../dataAccess/categoriesDA');
const categoryTypes = require('../enums/categoryTypes');

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

    getAllCategories: async () => {
        const resultDA = await categoriesDA.getAllCategories(categoryTypes.Food);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA;
        }
    },

    getDishById: async (id) => {
        const resultDA = await foodDA.getDishById(id);
        if(!resultDA){
            return undefined;
        }
        else{
            return resultDA;
        }
    }
}