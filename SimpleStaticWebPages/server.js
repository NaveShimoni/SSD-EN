const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Home' });
});

app.get('/services', (req, res) => {
    res.render('pages/services', { title: 'Services' });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
