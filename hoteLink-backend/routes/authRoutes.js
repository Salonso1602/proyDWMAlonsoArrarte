var express = require('express');
var router = express.Router();
const authBL = require('../businessLogic/authBL');

//auth login
router.post('/login', async function(req, res, next) {
    let jwt;
    
    try{
        jwt = await authBL.generateToken(req.body.email, req.body.password);
    } catch(err){
        console.error(err);
        res.sendStatus(500);
        return;
    }
    if(!jwt){
        res.sendStatus(401);
    } else{
        res.status(200).json(jwt);
    }
});



module.exports = router;