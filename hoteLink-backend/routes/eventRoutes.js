var express = require('express');
var router = express.Router();
const eventBL = require('../businessLogic/eventBL');


//get all events
router.get('/', async function(req, res, next) {
    let result;

    try{
        result = await eventBL.getAllEvents();
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay eventos'}); 
    } else{
        res.status(200).json(result);
    }
});

//get event details by id
router.get('/:id', async function(req, res, next) {
    let result;

    try{
        result = await eventBL.getEventById(req.params.id);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay evento con ese Id'}); 
    } else{
        res.status(200).json(result);
    }
});

//get event schedule by id
router.get('/:id/availability', async function(req, res, next) {
    let result;

    try{
        result = await eventBL.getSchedule(req.params.id);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay horarios para ese evento'}); 
    } else{
        res.status(200).json(result);
    }
});

//make question to event
router.post('/:id/questions', async function(req, res, next) {
    let result;

    try{
        result = await eventBL.addQuestion(req.params.id,req.body.question);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'No se pudo subir la consulta'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No existe ese evento'}); 
    } else{
        res.sendStatus(200);
    }
});

//make reservation to event
router.post('/:id/book', async function(req, res, next) {
    let result;

    try{
        result = await eventBL.bookEvent(req.params.id, req.body.userId);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({message : 'No se pudo hacer la reserva'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No existe ese evento'}); 
    } else{
        res.sendStatus(200);
    }
});

//DESIRABLE: cancel event reservation
router.post('/:id/cancel', async function(req, res, next) {

});

module.exports = router;