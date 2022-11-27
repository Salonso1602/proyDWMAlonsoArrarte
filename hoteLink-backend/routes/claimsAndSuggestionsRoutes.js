var express = require('express');
var router = express.Router();
const claimsAndSuggestionsBL = require('../businessLogic/claimsAndSuggestions');
const chkAuth = require('../businessLogic/authBL')

router.post(
  '/',
  chkAuth.checkAuth,
  async (req, res) => {
    console.log(req.auth);
    try {
      const result = await claimsAndSuggestionsBL.insertNew(req.body.requestText);
      res.status(201).json('Created');
    }
    catch (err) {
      console.error(err);

        const errorStatus = err.status;
        if(errorStatus){
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
  }
)

module.exports = router;