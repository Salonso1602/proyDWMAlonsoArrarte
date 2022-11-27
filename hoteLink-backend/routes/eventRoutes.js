var express = require('express');
const activityBL = require('../businessLogic/activityBL');
var router = express.Router();
const eventBL = require('../businessLogic/eventBL');
const { checkAuth } = require('../businessLogic/authBL')


//get all events
router.get('/', async function (req, res, next) {
    let result;

    try {
        result = await eventBL.getAllEvents(req.query);
    } catch (err) {
        console.error(err);

        const errorStatus = err.status;
        if (errorStatus) {
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
    if (!result) {
        res.status(404).json({ message: 'No hay eventos' });
    } else {
        res.status(200).json(result);
    }
});

//get event details by id
router.get('/:id', async function (req, res, next) {
    let result;

    try {
        result = await eventBL.getEventById(req.params.id);
    } catch (err) {
        console.error(err);

        const errorStatus = err.status;
        if (errorStatus) {
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
    if (!result) {
        res.status(404).json({ message: 'No hay evento con ese Id' });
    } else {
        res.status(200).json(result);
    }
});

//get event schedule by id
router.get('/:id/availability', async function (req, res, next) {
    let result;

    try {
        result = await eventBL.getSchedule(req.params.id);
    } catch (err) {
        console.error(err);

        const errorStatus = err.status;
        if (errorStatus) {
            res.sendStatus(errorStatus);
        } else {
            res.status(500).json({ message: 'Error interno del Server' });
        }
        return;
    }
    if (!result) {
        res.status(404).json({ message: 'No hay horarios para ese evento' });
    } else {
        res.status(200).json(result);
    }
});

//make question to event
router.post('/:id/questions',
    checkAuth,
    async function (req, res, next) {
        let result;

        try {
            result = await eventBL.addQuestion(req.auth.sub, req.params.id, req.body.question);
        } catch (err) {
            console.error(err);

            const errorStatus = err.status;
            if (errorStatus) {
                res.sendStatus(errorStatus);
            } else {
                res.status(500).json({ message: 'Error interno del Server' });
            }
            return;
        }
        if (result === undefined) {
            res.status(404).json({ message: 'No existe ese evento' });
        } else {
            if (result === true) {
                res.status(201).json();
            } else {
                res.status(500).json({ message: 'No se pudo subir la consulta' });
            }
        }
    });

//make reservation to event
router.post('/:id/book',
    checkAuth,
    async function (req, res, next) {
        let result;

        try {
            result = await eventBL.bookEvent(req.params.actId, req.auth.sub, req.body.amountPeople, req.body.finalPrice);
        }
        catch (err) {
            console.error(err);

            const errorStatus = err.status;
            if (errorStatus) {
                res.sendStatus(errorStatus);
            } else {
                res.status(500).json({ message: 'Error interno del Server' });
            }
            return;
        }
        if (result === undefined) {
            res.status(404).json({ message: 'No existe ese evento' });
        } else {
            if (result === true) {
                res.status(201).json();
            } else {
                res.status(500).json({ message: 'No se pudo concretar la reserva' });
            }
        }
    });

//DESIRABLE: cancel event reservation
router.post('/:id/cancel', async function (req, res, next) {
    res.sendStatus(404);
});

module.exports = router;