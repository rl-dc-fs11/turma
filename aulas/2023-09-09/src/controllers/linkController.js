const linkService = require("../services/linkServices");

const buscar = async (req, res) => {
  try {
    const resposta = await linkService.buscar()
    
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


const buscarPeloCode = async (req, res) => {
  try {
    const resposta = await linkService.buscarPeloCode(req.params.code)

    if(resposta) {
      res.send(resposta);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const criar = async (req, res) => {
  
  try {
    const link = req.body
    await linkService.criar(link)
    res.send("ok") 
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
 
};
 

const usuarioController = { buscar, criar, buscarPeloCode };

module.exports = usuarioController;
