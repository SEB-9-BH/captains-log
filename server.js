const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') 
const logRouter = require('./controllers/routeController')
const db = require('./models/db')
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
//new
app.get('/logs/new', (req,res) => {
    res.render('logs/New')
})

//create
app.post('/logs', async (req,res) => {
    req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    res.send(req.body)
})

app.listen(PORT, ()=> {
    console.log('the app is running')
})