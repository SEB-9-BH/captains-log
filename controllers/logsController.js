const express = require('express');
const router = express.Router();
const Log = require('../models/log');

// Index Route
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find({});
    res.render('logs/Index', { logs });
  } catch (err) {
    res.status(500).send(err);
  }
});

// New Route
router.get('/new', (req, res) => {
  res.render('logs/New');
});

// Create Route
router.post('/', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    await Log.create(req.body);
    res.redirect('/logs');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Show Route
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('logs/Show', { log });
  } catch (err) {
    res.status(404).send('Log not found');
  }
});

// Edit Route
router.get('/:id/edit', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('logs/Edit', { log });
  } catch (err) {
    res.status(404).send('Log not found');
  }
});

// Update Route
router.put('/:id', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/logs/' + req.params.id);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete Route
router.delete('/:id', async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.redirect('/logs');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
