const { Pool } = require("pg");

const config = {
  host: process.env.DB_CONFIG_HOST,
  port: process.env.DB_CONFIG_PORT,
  user: process.env.DB_CONFIG_USER,
  password: process.env.DB_CONFIG_PASS,
  database: process.env.DB_CONFIG_DATABASE,
  ssl: true,
};

const pool = new Pool(config);

module.exports = pool;
