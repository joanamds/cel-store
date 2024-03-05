const { User } = require('../models');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');

const createUser = async (username, email, password, role) => {
  const checkUser = await User.findOne({
    where: {
      email,
    },
  });
  if (checkUser) return {
    status: 409, message: { message: 'Usuário já registrado com este email' } };
  const user = await User.create({ username, email, password, role });
  const token = jwt.sign({ data: { userId: user.id, role: user.role } }, secret, jwtConfig);
  return { status: 201, message: { token } };
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports.createUser = createUser;
module.exports.getUserById = getUserById;
