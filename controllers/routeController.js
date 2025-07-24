const express = require('express');
const router = express.Router();
const Log = require('../models/log'); 

// INDEX
router.get('/', async (req, res) => {
    try {
        const logs = await Log.find({});
        res.render('logs/Index', { logs });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('logs/New');
});

// CREATE
router.post('/', async (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true;
    try {
        const createdLog = await Log.create(req.body);
        res.redirect(`/logs/${createdLog._id}`);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id);
        if (!foundLog) {
            throw new Error('No log with that ID');
        }
        res.render('logs/Show', { log: foundLog });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// EDIT
router.get('/:id/edit', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id);
        if (!foundLog) {
            throw new Error('No log with that ID');
        }
        res.render('logs/Edit', { log: foundLog });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    try {
        await Log.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/logs/${req.params.id}`);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id);
        res.redirect('/logs');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;