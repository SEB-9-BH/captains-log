require('dotenv').config()
const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const db = require('./models/db')
const methodOverride = require('method-override')
const logsRouter = require('./controllers/routeController');

const PORT = process.env.PORT || 3000


app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

db.once('open', () => {
    console.log('connected to mongo')
})

db.on('error', (error) => {
  console.error(error.message)
})


app.use(express.urlencoded({ extended: true }))// build a ssr website/parses information
app.use(methodOverride('_method'))
app.use(express.static('public'))


app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use('/logs', logsRouter);

//port
app.listen(PORT ,()=>{
    console.log(`Port ${PORT} is now active`)
})
