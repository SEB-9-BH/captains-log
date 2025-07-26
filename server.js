require('dotenv').config();
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const logsRouter = require('./controllers/routeController'); // ✅ Typo fixed here: logtsRouter ➜ logsRouter
const db = require('./models/db');
const PORT = process.env.PORT || 3000;

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Middleware
app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(methodOverride('_method'));              // For PUT and DELETE methods via query param
app.use(express.static('public'));               // For serving static files

// Custom middleware to set up res.locals.data
app.use((req, res, next) => {
    res.locals.data = {};
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/logs', logsRouter); // ✅ Inject logs router here

// Start server only after DB connects
db.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    });
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
});
