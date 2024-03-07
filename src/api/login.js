const LoginController = require('../database/controllers/LoginController');
const {
  validateLogin,
  validateEmail, 
  validatePassword } = require('../database/middlewares/usersValidations');

module.exports = async (req, res) => {
  try {
    validateLogin(req, res);
    validateEmail(req, res);
    validatePassword(req, res);
    await LoginController.login(req, res);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
