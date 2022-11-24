var express = require('express');
var router = express.Router();

//DESIRABLES

//get service requests by solicitant id
router.get('/requests/:id', async function(req, res, next) {
    res.sendStatus(404);
});

//cancel service request by solicitant id
router.patch('/requests/:id', async function(req, res, next) {
    res.sendStatus(404);
});

//make service request
router.post('/requests', async function(req, res, next) {
    res.sendStatus(404);
});

module.exports = router;