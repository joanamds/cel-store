const validateNewProduct = (req, res, next) => {
  const { name, brand, model, price, color } = req.body;
  if (!name || !price || !brand || !model || !color) {
    return res.status(400).json({ message: 'Estes itens são obrigatórios' });
  }
  return next();
}

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 3) {
    return res.status(400).json({ message: 'O nome deve conter pelo menos 3 caracteres' });
  }
  return next();
}

const validateBrand = (req, res, next) => {
  const { brand } = req.body;
  if (brand.length < 3) {
    return res.status(400).json({ message: 'A marca deve conter pelo menos 3 caracteres' });
  }
  return next();
}

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price < 1) {
    return res.status(400).json({ message: 'O preço deve ser maior que 0' });
  }
  if(typeof price !== 'number') {
    return res.status(400).json({ message: 'O preço deve ser um número' });
  }
  return next();
}

const validateColor = (req, res, next) => {
  const { color } = req.body;
  if (color.length < 3) {
    return res.status(400).json({ message: 'A cor deve conter pelo menos 3 caracteres' });
  }
  return next();
}

module.exports = { 
  validateNewProduct,
  validateName,
  validateBrand,
  validatePrice,
  validateColor
}