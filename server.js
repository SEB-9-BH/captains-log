require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') 
const logRouter = require('./controllers/routeController')
const PORT = process.env.PORT || 3000

//middleware
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use(express.static('public'))
//
app.get('/', (req,res) => {
    res.render('logs/New')
})


app.listen(PORT, ()=> {
    console.log('the app is running')
})