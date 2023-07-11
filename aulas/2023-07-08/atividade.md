# Atividade: Manipulação de Dados de Alunos com Express.js

Nesta atividade, você trabalhará com o framework Express.js para criar um servidor web que realiza operações básicas de manipulação de dados de alunos. O objetivo é criar rotas para obter a lista de alunos, adicionar novos alunos e salvar as informações em um arquivo JSON.

## Descrição do Código

O código fornecido apresenta uma estrutura básica para criar um servidor Express.js e já inclui a leitura e escrita de dados em um arquivo JSON chamado "alunos.json".

O servidor possui as seguintes rotas:

1. Rota principal ("/"): Retorna uma mensagem "Hello World" quando acessada.

2. Rota "/alunos": Retorna a lista de alunos armazenada no arquivo "alunos.json". A função `buscarAlunos()` é responsável por ler o arquivo e retornar os dados.

A atividade proposta é adicionar uma nova rota que permita adicionar um novo aluno ao arquivo "alunos.json" por meio de uma requisição POST.

## Tarefa: Implementar a Rota POST de Alunos

Seu objetivo é implementar a rota `servidor.post` para a adição de alunos. Siga as etapas abaixo para concluir a tarefa:

1. Localize o comentário `//TODO: CRIAR O servidor.post de alunos que recebe um aluno...` no código fornecido.

2. Dentro da função de callback da rota `servidor.post`, você deve implementar o código necessário para receber um objeto de aluno da requisição e salvá-lo no arquivo "alunos.json". O objeto de aluno deve ter a seguinte estrutura: 

```json
{
  "nome": "Amarilio",
  "matricula": "171",
  "ativo": true
}
```

3. Utilize a função `salvarAlunos(alunos)` para realizar a escrita dos dados atualizados no arquivo.

4. Certifique-se de que a rota esteja configurada corretamente, ou seja, utilizando o caminho "/alunos" e o método HTTP POST.

Após concluir a implementação da rota, você poderá testar o servidor localmente. Certifique-se de que o servidor esteja rodando na porta 8080 e use um cliente HTTP (como o Postman ou o Insomnia) para enviar uma requisição POST com os dados de um aluno. Verifique se o aluno é adicionado corretamente ao arquivo "alunos.json" e receba uma resposta adequada da rota.

Boa sorte na realização da atividade!