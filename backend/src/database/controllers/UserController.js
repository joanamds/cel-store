const UserService = require('../services/UserService');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const { status, message } = await UserService.createUser(username, email, encryptedPassword, role);
  return res.status(status).json(message);
}

module.exports = {
  createUser
}