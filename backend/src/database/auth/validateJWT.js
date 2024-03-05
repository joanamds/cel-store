const service = require('../services/UserService');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateToken = async (req, res, next) => {
  const bearerToken = req.header('authorization');
  if (!bearerToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const token = bearerToken.split(' ')[1]
    const decoded = jwt.verify(token, secret);
    const user = await service.getUserById(decoded.data.userId);
    if (!user) {
      return res.status(401).json({
        message: 'Expired or invalid token',
      });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

const decodedToken = (authorization) => {
  const token = authorization.split(' ')[1]
  const decoded = jwt.verify(token, secret);
  return decoded.data;
};

module.exports = {
  secret,
  jwtConfig,
  jwt,
  decodedToken,
  validateToken
}