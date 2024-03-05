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

if (process.env.DATABASE_URL) {
  options.url = process.env.DATABASE_URL;
} else {
  options.host = process.env.DB_HOST || 'localhost';
  options.port = process.env.DB_PORT || '5432';
  options.database = process.env.DB_DATABASE || 'postgres';
  options.username = process.env.DB_USER || 'postgres';
  options.password = process.env.DB_PASSWORD || 'senhaDoDB';
}

module.exports = {
  development: options,
};
