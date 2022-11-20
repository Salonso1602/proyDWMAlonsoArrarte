var express = require('express');
var router = express.Router();

//DESIRABLE: register new user
router.post('/', async function(req, res, next) {

});

//get activity reesrvations by user id
router.get('/:id/bookings/activities', async function(req, res, next) {

});

//get event reesrvations by user id
router.get('/:id/bookings/events', async function(req, res, next) {

});

module.exports = router;
