require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logs = require('./models/logs')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const LogsRouter = require('./controllers/routeController')
const PORT = process.env.PORT || 3000


app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})



// middleware to give us the body of the request data the user filled out
app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use(express.static('public'))

app.use((req,res,next)=> {
    res.locals.data = {}
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/logs', LogsRouter)

app.listen(PORT, () => {
    console.log('app running on port 3000 you are so good at coding...')
})