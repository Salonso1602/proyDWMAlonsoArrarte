var express = require('express');
var router = express.Router();
const activityBL = require('../businessLogic/activityBL');

//get all activities, can include query params for filters
router.get('/', async function(req, res, next) {
    let result;

    try{
        result = await activityBL.getAllActivities();
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay actividades'}); 
    } else{
        res.status(200).json(result);
    }
});

//get activity details by id
router.get('/:id', async function(req, res, next) {
    let result;

    try{
        result = await activityBL.getActivityById(req.params.id);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay actividad con esa Id'}); 
    } else{
        res.status(200).json(result);
    }
});

//get activity schedule by id
router.get('/:id/availability', async function(req, res, next) {
    let result;

    try{
        result = await activityBL.getSchedule(req.params.id);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'Error interno del Server'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No hay horarios para esa actividad'}); 
    } else{
        res.status(200).json(result);
    }
});

//make question to activity
router.post('/:id/questions', async function(req, res, next) {
    let result;

    try{
        result = await activityBL.addQuestion(req.params.id,req.body.question);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'No se pudo subir la consulta'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No existe esa actividad'}); 
    } else{
        res.sendStatus(200);
    }
});

//make reservation to activity
router.post('/:id/book', async function(req, res, next) {
    let result;

    try{
        result = await activityBL.bookActivity(req.params., req.body.userId);
    }catch(err){
        console.error(err.message);
        res.status(500).json({message : 'No se pudo hacer la reserva'});
        return;
    }
    if(!result){
        res.status(404).json({message : 'No existe esa actividad'}); 
    } else{
        res.sendStatus(200);
    }
});

//DESIRABLE: cancel activity reservation
router.post('/:id/cancel', async function(req, res, next) {

});

module.exports = router;