require('dotenv').config();
const express = require('express');
const app = express();

const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const logsRouter = require('./controllers/routeController'); 
const PORT = process.env.PORT || 3000;
const db = require('./models/db');

// View engine setup
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// MongoDB connection status
db.once('open', () => {
  console.log('connected to mongo');
});

db.on('error', (error) => {
  console.error(error.message);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/logs', logsRouter); 

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
