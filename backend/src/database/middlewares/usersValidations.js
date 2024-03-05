const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são requeridos' });
  }
  return next();
}

const validateNewUser = (req, res, next) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'Todos os campos são requeridos' });
  }
  return next();
}

const validateEmail = (req, res, next) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const { email } = req.body;
  if (emailRegex.test(email) === false) {
    return res.status(400).json({ message: 'O email deve estar em formato de email' });
  }
  return next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(password.length < 6) {
    return res.status(400).json({ message: 'A senha deve conter pelo menos 6 caracteres' });
  }
  return next();
}

const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if(username.length < 3) {
    return res.status(400).json({ message: 'O nome de usuário deve conter pelo menos 3 caracteres' });
  }
  return next();
}

const validateRole = (req, res, next) => {
  const { role } = req.body;
  if(role !== 'client' && role !== 'admin') {
    return res.status(400).json({ message: 'O papel do usuário deve ser "client" ou "admin"' });
  }
  return next()
}

module.exports = {
  validateLogin,
  validateNewUser,
  validateEmail,
  validatePassword,
  validateUsername,
  validateRole
}
