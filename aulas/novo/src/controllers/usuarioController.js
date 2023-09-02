const usuarioService = require("../services/usuarioServices");

const buscar = async (req, res) => {
  try {
    const resposta = await usuarioService.buscar()
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const buscarPeloId = async (req, res) => {
  
};

const criar = async (req, res) => {
  
};

const apagar = async (req, res) => {

};

const usuarioController = { buscar, buscarPeloId, criar, apagar };

module.exports = usuarioController;
