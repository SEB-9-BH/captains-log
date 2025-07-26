//constants
require("dotenv").config()
const express= require("express")
const app = express()
const jsxEngine = require("jsx-view-engine")
const methodOverrride=require("method-override")
const PORT= process.env.PORT|| 3000
const logsRouter=require("./controllers/routeController")
const db = require("./models/db")
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

db.once('open', () => {
    console.log('connected to mongodb')
})

//middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(methodOverrride("_method"))
app.use((req,res,next)=> {
    res.locals.data={}
    next()
})



app.get("/", (req,res)=> {
    res.send("Hello World!")
})
app.use("/logs",logsRouter)

app.listen(PORT, () => {
    console.log("The app is listening.")
})