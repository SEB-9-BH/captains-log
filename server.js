const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') 
const logRouter = require('./controllers/routeController')
const Log = require('./models/log')
const db = require('./models/db')
const log = require('./models/log')
const PORT = process.env.PORT || 3000

//middleware
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

db.once('open', () => {
    console.log('connected to mongo')
})

app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use(express.static('public'))
//
app.get('/', (req,res) => {
    res.send('New')
})
//Index
app.get('/logs', async (req,res) => {
        try {
            const logs = await Log.find({})
            res.render('logs/Index', {
                logs
            })
    
        } catch (error) {
                res.status(400).send({ message: error.message})
    }

})

//new
app.get('/logs/new', (req,res) => {
    res.render('logs/New')
})

//show

app.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id);
        if(!foundLog) {
             throw new Error('No log with that Id is in our database')
        }

        res.render('./logs/Show', {
             log : foundLog 
            });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});
//create
app.post('/logs', async (req,res) => {
    req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    try {
        const createdLog = await Log.create(req.body);
        res.redirect(`/logs/${createdLog._id}`); 
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});



app.listen(PORT, ()=> {
    console.log('the app is running')
})