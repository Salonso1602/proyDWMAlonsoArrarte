var express = require('express');
var router = express.Router();
const claimsAndSuggestionsBL = require('../businessLogic/claimsAndSuggestions');

router.post(
  '/',
  async (req, res) => {
    try {
      const result = await claimsAndSuggestionsBL.insertNew(req.body.requestText);
      res.sendStatus(201);
    }
    catch (err) {
      console.error(err);
      res.status(500).json({message: 'Error interno del Server'});
    }
  }
)

module.exports = router;