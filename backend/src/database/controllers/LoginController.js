const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await LoginService.login(email, password)
  return res.status(user.status).json(user.message);
}

module.exports = {
  login,
}