const { Pool } = require("pg");

const config = {
  host: "ep-hidden-lake-004674.us-east-2.aws.neon.tech",
  port: "5432",
  user: "ronierlima",
  password: "uYT74kfKhJbF",
  database: "encurtador",
  ssl: true,
};

const pool = new Pool(config);

const buscar = async () => {
  const resposta = await pool.query("select * from link");
  console.log(resposta.rows);
  return resposta.rows;
};

const buscarPeloCode = async (code) => {
  const resposta = await pool.query(`select * from link where code = '${code}'`);
  console.log(resposta.rows);
  return resposta.rows[0];
};

const criar = async (link) => {
  await pool.query(
    `insert into link (url, code, hits) values('${link.url}', '${link.code}', 0)`
  );
};

const linkRepository = { buscar, criar, buscarPeloCode };

module.exports = linkRepository;
