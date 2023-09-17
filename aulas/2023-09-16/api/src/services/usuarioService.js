const usuarioRepository = require("../repositories/usuarioRepository");

const buscar = async () => {
  const resposta = await usuarioRepository.buscar();

  return resposta;
};

const criar = async () => {
  return usuarioRepository.criar();
};

const login = async (credenciais) => {
  const usuario = await usuarioRepository.buscarPeloLogin(credenciais.login);

  if (usuario && usuario.senha === credenciais.senha) {
    return true;
  } else {
    return false;
  }
};

const usuarioService = { buscar, criar, login };

module.exports = usuarioService;
