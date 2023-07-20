const fs = require('fs');

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
function deletarAlunoDoArquivo(id) {
  const alunos = buscarAlunosNoArquivo();
  if (id >= 1 && id <= alunos.length) {
    alunos.splice(id - 1, 1);
    fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
    return true;
  }

  return false; 
}

const alunosServices = {
  buscar: () => {
    return buscarAlunosNoArquivo();
  },

  buscarPeloId: (id) => {
    const alunos = buscarAlunosNoArquivo();
    return alunos[id-1]
  },

  cadastrar: (aluno) => {
    salvarAlunosNoArquivo(aluno);
    return aluno;
  },
  deletar: (id) => {
    return deletarAlunoDoArquivo(id);
  },
};

module.exports = alunosServices;
