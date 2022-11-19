const Food = require('../entities/dish');
const foodDA = require('../db/dataAccess/foodDA');

module.exports = {
    getAllFoods :  async () => {
        let result = [];

        const queryRes = await foodDA.getAllEvents();
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            queryRes.forEach(fod => {
                result.push(new Food(fod.id, fod.name, fod.description, fod.price, fod.serviceTime));
            });
            return result;
        }
    },
}