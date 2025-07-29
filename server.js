const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// JSX View Engine Setup
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine()); // ✅ function call

// Connect to MongoDB
connectDB();

// Controllers
const routeController = require('./controllers/routeController');
const viewController = require('./controllers/viewController');
const dataController = require('./controllers/dataController');

// Routes
app.get('/logs', routeController.index);
app.get('/logs/new', viewController.new);
app.post('/logs', dataController.create);
app.get('/logs/:id', routeController.show);
app.get('/logs/:id/edit', viewController.edit);
app.put('/logs/:id', dataController.update);
app.delete('/logs/:id', dataController.delete);

// Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
