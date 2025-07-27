require("dotenv").config();
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const logRouter = require("./controllers/routeController");
const db = require("./models/db");
const PORT = process.env.PORT || 3000;

db.once("open", () => {
    console.log("Connected to mongoDB");
});

db.on("error", (error) => {
    console.error(error.message);
});

// Middleware
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.locals.data = {};
    next();
});

// Root Route
app.get("/", (req, res) => {
    res.send("Hello World! (Captain's Log Edition)");
});

// Inject Router Into Code
app.use("/logs", logRouter);

// Server
app.listen(PORT, () => {
    console.log("Server Initialized...");
});