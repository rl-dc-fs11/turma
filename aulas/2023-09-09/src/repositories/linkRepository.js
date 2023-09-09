const pool = require("../config/db");

const buscar = async () => {
  const resposta = await pool.query("select * from link");
  console.log(resposta.rows);
  return resposta.rows;
};

const buscarPeloCode = async (code) => {

  await pool.query(`update link set hits = hits + 1 where code = '${code}'`);

  const respostaAtualizada = await pool.query(`select * from link where code = '${code}'`);
  
  return respostaAtualizada.rows[0];
};

const criar = async (link) => {
  await pool.query(
    `insert into link (url, code, hits) values('${link.url}', '${link.code}', 0)`
  );
};

const linkRepository = { buscar, criar, buscarPeloCode };

module.exports = linkRepository;
