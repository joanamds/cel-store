require('dotenv').config();

const options = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Desabilite se não for necessário
    }
  },
  logging: false,
};

if (process.env.POSTGRES_URL) {
  options.url = process.env.POSTGRES_URL;
} else {
  options.host = process.env.POSTGRES_HOST || 'localhost';
  options.port = process.env.POSTGRES_PORT || '5432';
  options.database = process.env.POSTGRES_DATABASE || 'postgres';
  options.username = process.env.POSTGRES_USER || 'postgres';
  options.password = process.env.POSTGRES_PASSWORD || 'senhaDoDB';
}

module.exports = {
  development: options,
};

