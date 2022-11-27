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

        const errorStatus = err.status;
        if(errorStatus){
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
    if(result){
        res.status(200).json(result);
    }
});

module.exports = router;