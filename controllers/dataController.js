const Log = require('../models/logs')


const dataController = {}
//Index data
dataController.index =  async (req,res,next) => {
    try {
        if(!res.locals.data) res.locals.data = {}
        res.locals.data.logs = await Log.find({}) // <-- data
        next()
    }
    catch(error) {
        res.status(400).send(
            {message: error.message}
        )
    }
}

//New data is not in datacontroller because no datahas been add in yet


//Destroy data
dataController.destroy = async ( req,res, next) => {
        try{
     await Log.findOneAndDelete({'_id' : req.params.id}) // <-- data
        next()
    }
    catch(error) {
        res.status(400).send(
            {message: error.message}
        )
    }
}

//Update data 
dataController.update = async (req,res,next) => {
    if (req.body.shipIsBroken === 'on' ) {
        req.body.shipIsBroken = true
    } else  {
        req.body.shipIsBroken = false
    }    
    try{
        await Log.findOneAndUpdate({'_id' :req.params.id}, req.body, { new: true})// <-- data
        next()

    }
    catch(error){
        res.status(400).send(
            {message: error.message}
        )
    } 
} 

//Create data 
dataController.create = async (req,res,next) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else  {
        req.body.shipIsBroken = false
    }    
    try{
        res.locals.data.log = await Log.create(req.body) // <-- data
        next()

    }
    catch(error) {
        res.status(400).send(
            {message: error.message}
        )
    }
}

//Edit data is no need because will use showfor both edit and show

//Show data 
dataController.show = async (req,res,next) => {
        try {
        res.locals.data.log = await Log.findById(req.params.id) //<-- data 
        if (!res.locals.data.log) {
            throw new Error('There is no Log with that Id in our database')
        }
        next()

    }
    catch(error) {
        res.status(400).send(
            {message: error.message}
        )
    }
}


//Exporting data controlller to use in server.js
module.exports = dataController
