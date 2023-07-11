const express = require("express");
const fs = require("fs");

const PATH_ALUNOS = "../alunos.json";

function buscarAlunos() {
  const alunos = fs.readFileSync(PATH_ALUNOS, "utf-8");

  return alunos;
}
function salvarAlunos(alunos = []) {
  fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

const servidor = express();

servidor.get("/", (req, res) => {
  res.send("Hello Word");
});

servidor.get("/alunos", (req, res) => {
  res.send(buscarAlunos());
});

//TODO: CRIAR O servidor.post de alunos que recebe um aluno 
//e salva ele no alunos.json atraves da funcao salvarAlunos

servidor.listen("8080", () => {
  console.log("Rodando e Dançando na porta http://localhost:8080");
});
