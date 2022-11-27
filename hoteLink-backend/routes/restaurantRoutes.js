var express = require('express');
var router = express.Router();
const restaurantBL = require('../businessLogic/restaurantBL');

//get dishes from restaurant, can include query params for filters
router.get('/dishes', async function(req, res, next) {
    let result;

    try{
        result = await restaurantBL.getAllFoods(req.query);
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay Comida'}); 
    } else{
        res.status(200).json(result);
    }
});

router.get('/dishes/categories', async function(req, res) {
    let result;

    try{
        result = await restaurantBL.getAllCategories();
    }catch(err){
        console.error(err);

        const errorStatus = err.status;
        if(errorStatus){
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay Categorías'}); 
    } else{
        res.status(200).json(result);
    }
});

module.exports = router;
