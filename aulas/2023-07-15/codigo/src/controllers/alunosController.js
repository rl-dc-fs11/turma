const alunosServices = require("../services/alunosServices");

const alunosController = {
  buscar: async (req, res) => {
    const alunos = alunosServices.buscar();
    res.send(alunos);
  },

  buscarPeloId: (req, res) => {
    
    const alunos = alunosServices.buscarPeloId(req.params.id);
    res.send(alunos);
  },

  salvar: (req, res) => {
    const aluno = alunosServices.cadastrar(req.body)
    res.send(aluno);
  },
  deletar: (req, res) => {
    const id = req.params.id;

    if (alunosServices.deletar(id)) {
      res.status(200).json({ message: "Aluno excluído com sucesso." });
    } else {
      res.status(404).json({ error: "Aluno não encontrado." });
    }
  },
};


module.exports = alunosController;
