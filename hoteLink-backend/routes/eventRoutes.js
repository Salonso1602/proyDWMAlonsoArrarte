var express = require('express');
var router = express.Router();

//get all events
router.get('/', async function(req, res, next) {

});

//get event details by id
router.get('/:id', async function(req, res, next) {

});

//get event schedule by id
router.get('/:id/availability', async function(req, res, next) {

});

//make question to event
router.post('/:id/questions', async function(req, res, next) {

});

//make reservation to event
router.post('/:id/book', async function(req, res, next) {

});

//DESIRABLE: cancel event reservation
router.post('/:id/cancel', async function(req, res, next) {

});

module.exports = router;