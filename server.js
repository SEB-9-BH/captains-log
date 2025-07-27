require('dotenv').config()

const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const logsRouter = require('./controllers/routeController')
const db = require('./models/db')
const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

db.once('open', () => {
    console.log('connected to mongo')
})

db.on('error',(error) => {
    console.error(error.message)
})

// Middleware for the body
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method')) 

//Method Override
app.use(methodOverride('_method'))

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.get('/', (req, res) => {
    res.send('hello world')
})

//Inject Router Into The Code
app.use('/logs', logsRouter)

//Listen 
app.listen(PORT, () => {
    console.log('Running!')
})