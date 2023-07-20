const express = require("express");
const fs = require("fs");

const PATH_ALUNOS = "../data/alunos.json";

function buscarAlunos() {
  const alunos = fs.readFileSync(PATH_ALUNOS, "utf-8");

  return JSON.parse(alunos);
}

function salvarAlunos(aluno = {}) {
  
  const alunos = buscarAlunos()

  alunos.push(aluno)

  fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

const servidor = express();

servidor.use(express.json())

servidor.get("/", (req, res) => {
  res.send("Hello Word");
});

servidor.get("/show", (req, res) => {
  res.send(buscarAlunos());
});

//TODO: CRIAR O servidor.post de alunos que recebe um aluno 
//e salva ele no alunos.json atraves da funcao salvarAlunos
servidor.post("/alunos", (req, res) => {
  
  salvarAlunos(req.body)
  res.send(req.body);
})

servidor.listen("8080", () => {
  console.log("Rodando e Dançando na porta http://localhost:8080");
});
