const pool = require("../config/db");

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const buscar = async () => {
  const links = await prisma.link.findUnique();
  console.log(links);
  return links;
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
