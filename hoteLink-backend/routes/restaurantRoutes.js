var express = require('express');
var router = express.Router();
const restaurantBL = require('../businessLogic/restaurantBL');

//get dishes from restaurant, can include query params for filters
router.get('/dishes', async function(req, res, next) {
    let result;

    try{
        result = await restaurantBL.getAllFoods(req.query.hotelId);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay Comida'}); 
    } else{
        res.status(200).json(result);
    }
});



module.exports = router;
