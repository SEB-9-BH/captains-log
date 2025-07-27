require('dotenv').config()
const express = require('express')
const app = express()
const logsRouter= require('./controllers/routerController')
const jsxEngine = require('jsx-view-engine')
const methodOverride=require('method-override')
const db= require('./models/db')
const PORT= process.env.PORT || 3000
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
db.once('open', () => {
    console.log('connected to mongo successfully')
})
db.on('error', (error)=>{
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
    res.send('Hello World!')
})

app.use('/logs', logsRouter)

app.listen(PORT, () => {
    console.log('app running on port 3000, I was promised this code 3000 years ago...')
})
