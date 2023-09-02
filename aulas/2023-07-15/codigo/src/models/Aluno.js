const { v4: uuidv4 } = require('uuid');

class Aluno {
  
  constructor(nome, ativo) {
    this.id = uuidv4();
    this.nome = nome;
    this.ativo = ativo;
  }
}

module.exports = Aluno
