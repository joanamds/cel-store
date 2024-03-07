require('dotenv').config();

console.log('POSTGRES_URL', process.env.POSTGRES_URL);

const options = {
  url: process.env.POSTGRES_URL,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Desabilite se não for necessário
    }
  },
  logging: false,
};

module.exports = options;