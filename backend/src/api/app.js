const express = require('express');
const LoginController = require('../database/controllers/LoginController');
const ProductController = require('../database/controllers/ProductController');
const app = express();
const { validateToken } = require('../database/auth/validateJWT');
app.use(express.json());

app.post('/login', LoginController.login);
app.post('/products', validateToken, ProductController.createProduct);
app.get('/products/search', ProductController.searchProduct);
app.get('/products/:id', ProductController.getProductById);
app.put('/products/:id', validateToken, ProductController.updateProduct);
app.delete('/products/:id', validateToken, ProductController.deleteProduct);
app.get('/products', ProductController.getAllProducts);

module.exports = app;