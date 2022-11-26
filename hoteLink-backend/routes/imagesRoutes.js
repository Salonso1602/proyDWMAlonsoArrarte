var express = require('express');
var router = express.Router();
const imagesBL = require('../businessLogic/imagesBL')

//get image by id
router.get('/:id', async function(req, res, next) {
    let result;
    try{
        result = await imagesBL.getImageById(req.params.id);
    }catch(err){
        console.error(err);
        res.sendStatus(500);
        return;
    }
    if(result){
        res.status(200).json(result);
    }
});

module.exports = router;