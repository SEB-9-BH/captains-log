require('dotenv').config()
const express = require('express')
const app = express()
const jsxEngine = require('jsx-view-engine')
const db = require('./models/db')
const methodOverride = require('method-override')
const logsRouter = require('./controllers/routeController')

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


app.get('/', (req, res) => {
    res.send('Hello World')
})
// inject the router into the code
app.use('/logs', logsRouter)

//port
app.listen(PORT ,()=>{
    console.log(`Port ${PORT} is now active`)
})


/*
New Route

touch views/logs/New.jsx


    form with action="/logs" and method="POST"
    input type text for a title
    input type textarea for an entry
    input type checkbox for shipIsBroken
    input type submit

change your res.send to res.render this view



Create Route

check to make sure it works by changing the res.send from a string to sending the req.body - it should send the data you inputted to your new form
upgrade your data
change the input of your checkbox to be true/false rather than on
now when you check your res.send(req.body) you should see true/false rather than 'on/off' - the rest of your data should stay the same
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Update Create
    upgrade your code to create your log in MongoDB
    have your route redirect to the show page after create
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
    Stretch: make a seed file and seed it


index Route 

    In server.js make an index route, be sure to follow the Restful convention
    first, just test it by having it res.send('index')
    Don't forget to fill out your Restful table!
    create Index.jsx and change your res.send to res.render this page
    upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
    Add a link to the create page
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Show Route

    Fill out your Restful table
    In server.js make a show route, be sure to follow the Restful convention
    create a mongo query and res.send your data as a string
    upgrade your Index.jsx so that each title links to its show page
    Create a Show.jsx and add HTML

    show the title
    show the entry
    show whether the ship is broken or not
    add a link back to the index page
    bonus:
    if you had added time stamps to your model, display the date the entry was created

    upgrade your res.send to a res.render of your Show.jsx
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Edit Route

    Fill out your Restful table
    in your Index.jsx, add a link to your edit route
    create your edit route in your server.js
    create your Edit.jsx
    test it to make sure it works as expected (be sure to populate your form with your log's data)
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Put Route

    Fill out your Restful table
    upgrade your Edit.jsx form to have the appropriate action and method
    create your PUT route
    First, just have it res.send the updated log and check it is as expected
    change the res.send to a res.redirect to your index page
    don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to

Controllers

    mkdir controllers
    touch controllers/routeController.js controllers/viewController.js controllers/dataController.js
    work on refactoring your code so your logs routes are in your controller file, rather than in server.js and the logic is split appropriately

Layout

    use static files and Layout to add styling to each page and make the pages look beautiful.

Data

    move your mongoose connection code into it's own file and import it into the server



Bonuses

    The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
    build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
    make a seed file and seed it
    have your update route redirect to the show page of the log that was edited
    research res.redirect('back')
    create a seed file and seed your database
    work on your css, make this Captain's Log look awesome!
    if you have timestamps, figure out how to edit/display the edited date

*/