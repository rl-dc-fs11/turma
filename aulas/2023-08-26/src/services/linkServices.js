const randomstring = require('randomstring');

const linkRepository = require("../repositories/linkRepository");

const buscar = async () => {
  const resposta = await linkRepository.buscar();

  return resposta;
};

const buscarPeloCode = async (code) => {
  const resposta = await linkRepository.buscarPeloCode(code);

  return resposta;
};


const criar = async (link) => {

  if(!link.url) {
    throw new Error("url é obrigatoria")
  }

  link.code = randomstring.generate(5);
  
  await linkRepository.criar(link);
};

const linkService = { buscar, criar, buscarPeloCode };

module.exports = linkService;
