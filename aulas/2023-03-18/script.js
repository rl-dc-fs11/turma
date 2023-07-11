const pessoaRonier = {
  nome: "Ronier",
  idade: 24,
}


const nomeElement = document.getElementById("nome")
const idadeElement = document.getElementById("idade")
 

nomeElement.innerText = pessoaRonier.nome

idadeElement.innerText = pessoaRonier.idade + " anos"
