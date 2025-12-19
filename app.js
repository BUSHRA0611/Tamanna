const express = require('express');
const exphbs = require('express-handlebars');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Static files
app.use(express.static('public'));

// Routes
app.use('/', blogRoutes);

// Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});