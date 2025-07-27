const express = require('express')
const router = express.Router()
const Log = require('../models/log')
const dataController =require("./dataController")
const viewController =require("./viewController")

router.get('/', async (req, res) => {
  
    try {
            const logs =  await Log.find({}) 
            res.render('logs/Index', {
                logs
            })
    } catch (error) {
            res.status(400).send({ message: error.message})
    }
})

router.get('/new', (req, res) => {
    res.render('logs/New')
})


router.delete('/:id', async (req, res) => {
    try{
        await Log.findOneAndDelete({'_id': req.params.id })
            .then(() => {
                res.redirect('/logs')
            })
    }catch(error){
        res.status(400).send({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else if(req.body.shipIsBroken !== true) {
        req.body.shipIsBroken = false;
    }
    try {
        await Log.findOneAndUpdate({'_id': req.params.id}, req.body, { new: true })
            .then(()=>{
                res.redirect(`/logs/${req.params.id}`)
            })
    } catch(error){
        res.status(400).send({ message: error.message })
    }
})
router.post("/", dataController.create,viewController.redirectHome )


router.get('/:id/edit', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id)
        if(!foundLog){
            throw new error('No log with that Id is in our database')
        } 
        res.render('logs/Edit', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})



router.get('/:id', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id)
        if(!foundLog){
            throw new error('No log with that Id is in our database')
        } 
        res.render('logs/Show', {
            log: foundLog
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})



module.exports = router