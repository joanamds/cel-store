require('dotenv').config();

const options = {
  url: process.env.DATABASE_URL,
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