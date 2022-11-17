var express = require('express');
var router = express.Router();

//get all activities, can include query params for filters
router.get('/', async function(req, res, next) {

});

//get activity details by id
router.get('/:id', async function(req, res, next) {

});

//get activity schedule by id
router.get('/:id/availability', async function(req, res, next) {

});

//make question to activity
router.post('/:id/questions', async function(req, res, next) {

});

//make reservation to activity
router.post('/:id/book', async function(req, res, next) {

});

//DESIRABLE: cancel activity reservation
router.post('/:id/cancel', async function(req, res, next) {

});

module.exports = router;