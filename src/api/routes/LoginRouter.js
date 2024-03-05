const LoginController = require('../../database/controllers/LoginController');
const express = require('express');
const router = express.Router();
const {
  validateLogin,
  validateEmail, 
  validatePassword } = require('../../database/middlewares/usersValidations');

router.post('/', validateLogin, validateEmail, validatePassword, LoginController.login);

module.exports = router;
