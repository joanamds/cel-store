const express = require('express');
const UserController = require('../database/controllers/UserController');
const ProductController = require('../database/controllers/ProductController');
const app = express();

app.use(express.json());

app.post('/login', UserController.login);
app.get('/products/search', ProductController.searchProduct);
app.get('/products/:id', ProductController.getProductById);
app.get('/products', ProductController.getAllProducts);

module.exports = app;