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

db.once('open',()=>{
    console.log('connected to mongo');
})
db.on('error',()=>{
    console.error(error.message);
})

app.use(express.urlencoded({ extended: true })) 
app.use(methodOverride('_method')) 
app.use(express.static('public'))

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/logs', logsRouter)

app.listen(PORT, () => {
    console.log('app running on port 3000 you are so good at coding...')
})