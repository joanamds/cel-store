const UserController = require('../../database/controllers/UserController');
const express = require('express');
const router = express.Router();
const {
  validateNewUser,
  validateUsername,
  validateEmail,
  validatePassword,
  validateRole } = require('../../database/middlewares/usersValidations');

router.post('/',
  validateNewUser,
  validateUsername,
  validateEmail,
  validatePassword,
  validateRole, UserController.createUser);

module.exports = router;