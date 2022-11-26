var express = require('express');
var router = express.Router();
const newsBL = require('../businessLogic/newsBL');

router.get('/', async function(req, res, next) {
    let result;

    try{
        result = await newsBL.getNews(req.query.hotelId);
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay Publicaciones'}); 
    } else{
        res.status(200).json(result);
    }
});



module.exports = router;
