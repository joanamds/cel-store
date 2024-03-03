const UserService = require('../services/UserService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserService.login(email, password)
  return res.status(user.status).json(user.message);
}

module.exports = {
  login,
}