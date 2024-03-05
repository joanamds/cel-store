const { User } = require('../models');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');
const bcrypt = require('bcrypt');

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return { status: 401, message: 'Usuário não encontrado' };
  }

  const decodePassword = await bcrypt.compare(password, user.password);

  if (!decodePassword) {
    return { status: 401, message: { message: 'Email ou senha incorretos' } };
  }

  const token = jwt.sign({ data: { userId: user.id, role: user.role } }, secret, jwtConfig);

  return { status: 200, message: { token }};
}

module.exports = {
  login
}