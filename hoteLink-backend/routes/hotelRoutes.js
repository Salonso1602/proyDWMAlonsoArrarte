var express = require('express')
var router = express.Router();
const hotelBL = require('../businessLogic/hotelBL')

//get all hotels
router.get('/', async function(req, res, next) {
    let result;

    try{
        result = await hotelBL.getHotelListings();
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No existen hoteles.'}); 
    } else{
        res.status(200).json(result);
    }
});

//get hotel complete info by id
router.get('/:id', async function(req, res, next) {
    let result;

    try{
        result = await hotelBL.getHotelById(req.params.id);
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay hotel con esa Id'}); 
    } else{
        res.status(200).json(result);
    }
});

module.exports = router;