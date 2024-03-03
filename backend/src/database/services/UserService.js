const { Users } = require('../models/UsersModel');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');
const bcrypt = require('bcrypt');

const login = async (email, password) => {
  const user = await Users.findOne({
    where: {
      email,
    },
  });
  const decodePassword = await bcrypt.compare(user.password, password);
  if (!decodePassword) {
    return { status: 401, message: 'Incorrect email or password'};
  }
  const token = jwt.sign({ data: { userId: user.id, role: user.role } }, secret, jwtConfig);

  return { status: 200, message: { token }};
}

module.exports = {
  login,
}
