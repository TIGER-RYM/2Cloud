const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/products', (req, res) => {
  res.render('products');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
