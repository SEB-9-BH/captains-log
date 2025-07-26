require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const Log = require('./models/logs')
const logRouter = require('./controllers/routeController')
const PORT = process.env.PORT || 3000

app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx', jsxEngine()) 



//Conncetion to database 
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connceted to mongo')
})

//Middleware to acces data taken from users 

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static('public'))


app.use((req, res, next) => {
  res.locals.data = {}
  next()
})



//Inject the router into the code 
app.use('/logs', logRouter)


app.listen(PORT, () => {
    console.log("App is running on port 3000")
})
