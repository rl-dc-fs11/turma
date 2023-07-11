const fs = require("fs");
const http = require("http");

const PATH_ALUNOS = "../alunos.json";

function buscarAlunos() {
  const alunos = fs.readFileSync(PATH_ALUNOS, "utf-8");

  return alunos;
}

function salvarAlunos(alunos = []) {
  fs.writeFileSync(PATH_ALUNOS, JSON.stringify(alunos));
}

const servidor = http.createServer(async (req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url == "/alunos") {
    if (req.method == "GET") {
      const alunos = buscarAlunos();
      res.end(alunos);
    }
  } else {
    res.end("Páginaí");
  }
});

servidor.listen("8080", () => {
  console.log("Rodando e Dançando na porta http://localhost:8080");
});
