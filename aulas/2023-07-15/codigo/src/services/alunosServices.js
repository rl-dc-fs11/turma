const fs = require("fs");
const Aluno = require("../models/Aluno");

const PATH_ALUNOS = "./data/alunos.json";

function buscarAlunosNoArquivo() {
  const alunos = fs.readFileSync(PATH_ALUNOS, "utf-8");

  return JSON.parse(alunos);
}

function salvarAlunosNoArquivo(aluno = {}) {
  const alunos = buscarAlunosNoArquivo();

  alunos.push(aluno);

  fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

function atualizarAlunosNoArquivo(alunos = []) {
  fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

const alunosServices = {
  buscar: () => {
    return buscarAlunosNoArquivo();
  },

  buscarPeloId: (id) => {
    const alunos = buscarAlunosNoArquivo();
    return alunos[id - 1];
  },

  cadastrar: (aluno) => {
    
    const novoAluno = new Aluno(aluno.nome, aluno.ativo)

    salvarAlunosNoArquivo(novoAluno);
    return aluno;
  },

  deletarPeloId: (id) => {
    const alunos = buscarAlunosNoArquivo();
    
    alunos.splice(id - 1, 1);
    atualizarAlunosNoArquivo(alunos);
  },
};

module.exports = alunosServices;
