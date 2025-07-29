const express = require('express');
const connectDB = require('./config/db'); // Import the DB connection function
const bodyParser = require('body-parser');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override'); // for handling DELETE and PUT requests
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
// Use express-ejs-layouts middleware
app.use(expressLayouts);
// Set EJS as the view engine
app.set('view engine', 'ejs');
// Import controller files
const routeController = require('./controllers/routeController');
const viewController = require('./controllers/viewController');
const dataController = require('./controllers/dataController');
// Serve static files (like CSS) from the 'public' folder
app.use(express.static('public'));
// Use method-override middleware to allow DELETE and PUT methods in forms
app.use(methodOverride('_method'));
// Set up middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set up JSX view engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine);
// Connect to MongoDB
connectDB(); // Use the connectDB function to connect to MongoDB
// Routes
app.get('/logs', routeController.index);         // Index Route
app.get('/logs/new', viewController.new);        // New Log Form Route
app.post('/logs', dataController.create);        // Create Log Route
app.get('/logs/:id', routeController.show);      // Show Log Route
app.get('/logs/:id/edit', viewController.edit);  // Edit Log Form Route
app.put('/logs/:id', dataController.update);     // Update Log Route
app.delete('/logs/:id', dataController.delete);  // Delete Log Route
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





















