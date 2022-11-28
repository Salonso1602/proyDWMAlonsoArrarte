var express = require('express');
var router = express.Router();
const activityBL = require('../businessLogic/activityBL');
const { checkAuth } = require('../businessLogic/authBL')

//get all activities, can include query params for filters
router.get('/', async function (req, res, next) {
    let result;

    try {
        result = await activityBL.getAllActivities(req.query);
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
        res.status(404).json({ message: 'No hay actividades' });
    } else {
        res.status(200).json(result);
    }
});

router.get('/categories', async function (req, res) {
    let result;

    try {
        result = await activityBL.getAllCategories();
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
        res.status(404).json({ message: 'No hay Categorías' });
    } else {
        res.status(200).json(result);
    }
});

//get activity details by id
router.get('/:id', async function (req, res, next) {
    let result;

    try {
        result = await activityBL.getActivityById(req.params.id);
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
        res.status(404).json({ message: 'No hay actividad con esa Id' });
    } else {
        res.status(200).json(result);
    }
});

//get activity schedule by id
router.get('/:id/availability', async function (req, res, next) {
    let result;

    try {
        result = await activityBL.getSchedule(req.params.id);
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
        res.status(404).json({ message: 'No hay horarios para esa actividad' });
    } else {
        res.status(200).json(result);
    }
});

//make question to activity
router.post('/:id/questions',
    checkAuth,
    async function (req, res, next) {
        let result;

        try {
            result = await activityBL.addQuestion(req.auth.sub, req.params.id, req.body.question);
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
            res.status(404).json({ message: 'No existe esa actividad' });
        } else {
            if (result === true) {
                res.status(201).json();
            } else {
                res.status(500).json({ message: 'No se pudo subir la consulta' });
            }

        }
    });

//make reservation to activity
router.post('/:id/book',
    checkAuth,
    async function (req, res, next) {
        let result;

        try {
            result = await activityBL.bookActivity(
                parseInt(req.params.id),
                parseInt(req.auth.sub),
                parseInt(req.body.placesToBook),
                req.body.until,
                parseFloat(req.body.finalPrice)
            );
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
            res.status(404).json({ message: 'No existe esa actividad' });
        } else {
            if (result === true) {
                res.status(201).json();
            } else {
                res.status(500).json({ message: 'No se pudo concretar la reserva' });
            }
        }
    });

//DESIRABLE: cancel activity reservation
router.post('/:id/cancel', async function (req, res, next) {
    res.sendStatus(404);
});

module.exports = router;