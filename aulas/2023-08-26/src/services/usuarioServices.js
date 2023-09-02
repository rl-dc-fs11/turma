const usuarioRepository = require("../repositories/usuarioRepository");

const buscar = async () => {
  const resposta = await usuarioRepository.buscar();
  
  return resposta;
};

const buscarPeloId = async () => {};

const criar = async () => {};

const apagar = async (req, res) => {};

const usuarioService = { buscar, buscarPeloId, criar, apagar };

module.exports = usuarioService;
