const { Pool } = require("pg");

const config = {
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "123",
  database: "links_db",
};

const pool = new Pool(config);

const buscar = async () => {
  const resposta = await pool.query("select * from usuarios");
  console.log(resposta.rows);
  return resposta.rows;
};
const usuarioRepository = { buscar };

module.exports = usuarioRepository;
