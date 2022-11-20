var express = require('express');
var router = express.Router();

//get service requests by solicitant id
router.get('/requests/:id', async function(req, res, next) {

});

//cancel service request by solicitant id
router.patch('/requests/:id', async function(req, res, next) {

});

//make service request
router.post('/requests', async function(req, res, next) {

});

module.exports = router;