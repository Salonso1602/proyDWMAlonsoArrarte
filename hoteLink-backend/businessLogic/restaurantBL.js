const Food = require('../entities/dish');
const foodDA = require('../dataAccess/foodDA');

module.exports = {
    getAllFoods :  async (hotelId) => {
        let result = [];

        const resultDA = await foodDA.getAllFoods(hotelId);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            resultDA.forEach(fod => {
                result.push(new Food(fod.id, fod.name, fod.description, fod.price, fod.serviceTime));
            });
            return result;
        }
    },
}