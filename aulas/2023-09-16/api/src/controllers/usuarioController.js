const usuarioService = require("../services/usuarioService");

const buscar = async (req, res) => {
  try {
    const resposta = await usuarioService.buscar()
    
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const criar = async (req, res) => {
  try {

    const resposta = await usuarioService.criar()
    
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {

    const resposta = await usuarioService.login(req.body)
    if(resposta) {
      res.sendStatus(200);
    }else {
      res.sendStatus(401);
    }
    
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
 

const usuarioController = { buscar, criar, login };

module.exports = usuarioController;
