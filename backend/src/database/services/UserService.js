const { User } = require('../models');

const getUserById = async (id) => {
  const user = await User.findOne({ where: id});
  return user;
}

module.exports = {
  getUserById
}
