const express = require('express');
const app = express();
app.use(express.json());
const UserRouter = require('./routes/UserRouter');
const LoginRouter = require('./routes/LoginRouter');
const ProductRouter = require('./routes/ProductsRouter');

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/products', ProductRouter);

module.exports = app;