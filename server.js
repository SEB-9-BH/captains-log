require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();

const PORT = process.env.PORT || 3000;

// اتصال بقاعدة البيانات
require('./models/db');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine')());

// ربط الراوتر
app.use('/logs', require('./controllers/logsController'));

// الصفحة الرئيسية تحول إلى /logs
app.get('/', (req, res) => {
  res.redirect('/logs');
});

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
