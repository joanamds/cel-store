require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

const suffix = {
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || '5432',
  database: `${process.env.PGUSER || 'postgres'}${suffix[environment] || ''}`,
  username: process.env.PGUSER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'senhaDoDB',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: options,
};
