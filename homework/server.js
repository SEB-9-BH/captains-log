require('dotenv').config()
const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override') 
const Log= require('./models/log')

const logRouter= require('./controllers/routeController')
const db =require('./models/db')
const PORT = process.env.PORT || 3000



// setup
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


//db
db.once('open', () => {
    console.log('connected to mongo')
})


db.on('error', (error) =>{
    console.error(error.message)
})



// middleware
app.use(express.urlencoded({ extended: true })) 
app.use(methodOverride('_method'))


//override
app.use((req,res,next) => {
    res.locals.data ={}
    next()
})

app.get('/',(req,res) => {
        res.send('Hello World')

})


app.use('/logs', logsRouter)

//listen
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`)
})


