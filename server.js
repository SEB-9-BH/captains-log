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

app.use('/logs', logRouter)
app.use(express.static('public'));



app.listen(PORT, ()=> {
    console.log('the app is running')
})