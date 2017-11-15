require('dotenv').config();

module.exports = {

  development: {
    client: process.env.DB_DRIVER,
    connection: {
      host: 'localhost',
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './api/db/migrations',
    },
    seeds: {
      directory: './api/db/seeds',
    },
  },

  staging: {
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './lib/db/migrations',
    },
    seeds: {
      directory: './lib/db/seeds',
    },
  },

  production: {
    client: process.env.DB_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 50,
    },
    migrations: {
      tableName: 'migrations',
      directory: './lib/db/migrations',
    },
    seeds: {
      directory: './lib/db/seeds',
    },
  },

};
