const UserController = require('../database/controllers/UserController');
const {
  validateNewUser,
  validateUsername,
  validateEmail,
  validatePassword,
  validateRole } = require('../database/middlewares/usersValidations');

module.exports = async (req, res) => {
  try {
    validateNewUser(req, res);
    validateUsername(req, res);
    validateEmail(req, res);
    validatePassword(req, res);
    validateRole(req, res);
    await UserController.createUser(req, res);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};