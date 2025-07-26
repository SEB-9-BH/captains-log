const Log = require('../models/log.js');

const dataController = {}

//index
dataController.index = async (req,res,next) => {
   try {
    res.locals.data.logs = await Log.find({})
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

//delete
dataController.destroy = async (req, res, next ) => {
    try {
         await Log.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

//update
dataController.update = async (req, res, next) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else if(req.body.shipIsBroken !== true) {
        req.body.shipIsBroken = false;
    }
    try {
      res.locals.data.log = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


//create
dataController.create = async (req, res, next) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else if(req.body.shipIsBroken !== true) {
        req.body.shipIsBroken = false;
    }
    try {
      // console.log(req.body)
      res.locals.data.log = await Log.create(req.body)
      // console.log(res.locals.data.log)
      next()
    } catch (error) {
      // console.log("here")
      res.status(400).send({ message: error.message })
    }
}

//show
dataController.show = async (req, res, next) => {
    try {
        res.locals.data.log = await Log.findById(req.params.id)
        if(!res.locals.data.log){
            throw new error(`could not locate a log with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController