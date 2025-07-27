require("dotenv").config();
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;

// Import routes and database connection
const logsRouter = require("./controllers/routeController");
const db = require("./models/db");

// View engine setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Connect to MongoDB
db.once("open", () => {
  console.log("connected to mongodb");
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Mount the logs router
app.use("/logs", logsRouter);

// Optional test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
