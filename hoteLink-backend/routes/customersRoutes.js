var express = require('express');
var router = express.Router();

//DESIRABLE: register new user
router.post('/', async function(req, res, next) {
    res.sendStatus(404);
});

//get activity reesrvations by user id
router.get('/:id/bookings/activities', async function(req, res, next) {
    res.sendStatus(404);
});

//get event reesrvations by user id
router.get('/:id/bookings/events', async function(req, res, next) {
    res.sendStatus(404);
});

module.exports = router;
