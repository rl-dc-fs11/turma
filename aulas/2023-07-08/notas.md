# Notas de Aula: Introdução ao módulo HTTP e ao módulo FS, e Introdução ao Express.js

Nesta aula, abordamos os conceitos básicos do módulo HTTP e do módulo FS, além de fazer uma introdução ao framework Express.js. Aqui estão algumas notas importantes sobre o conteúdo discutido:

## Módulo HTTP

- O módulo HTTP é um módulo integrado do Node.js que permite a criação de servidores web.
- Ele fornece funcionalidades para lidar com requisições e respostas HTTP.
- Utilizando o módulo HTTP, podemos criar rotas e definir ações para cada rota, permitindo que o servidor responda a diferentes requisições.

## Módulo FS

- O módulo FS (File System) é um módulo integrado do Node.js que permite a manipulação de arquivos e diretórios.
- Ele fornece métodos para leitura, escrita, exclusão e outras operações em arquivos e diretórios do sistema de arquivos.
- Utilizando o módulo FS, podemos ler dados de arquivos, escrever dados em arquivos e realizar outras operações relacionadas a arquivos.

## Introdução ao Express.js

- O Express.js é um framework web rápido, flexível e minimalista para Node.js.
- Ele fornece uma camada de abstração sobre o módulo HTTP, simplificando a criação de servidores web.
- O Express.js facilita a definição de rotas, o processamento de requisições e a geração de respostas.
- Com o Express.js, podemos criar aplicativos web robustos e escaláveis de forma mais eficiente.

## Resumo do Código

O [código](./codigo) fornecido apresenta um exemplo simples de criação de um servidor web utilizando o módulo HTTP. Aqui estão algumas informações sobre o código:

- O servidor é criado usando a função `createServer` do módulo HTTP.
- A função de callback passada para `createServer` é executada para cada requisição recebida pelo servidor.
- O código verifica se a rota da requisição é "/alunos" e se o método da requisição é "GET".
- Se a rota for "/alunos" e o método for "GET", a função `buscarAlunos` é chamada para obter os dados dos alunos e enviá-los como resposta.
- Caso contrário, é enviada a resposta "Páginaí".
- O servidor está configurado para ouvir na porta 8080.

### Próximos Passos

- Durante a aula, foi introduzido o framework Express.js como uma alternativa ao módulo HTTP básico.
- O Express.js simplifica a criação de rotas, o processamento de requisições e a geração de respostas.
- É recomendado explorar o Express.js e seus recursos adicionais, como middlewares, manipulação de parâmetros de rota e criação de APIs RESTful.

Essas são apenas algumas notas sobre o conteúdo abordado nesta aula. Continue praticando e explorando os conceitos apresentados para aprofundar seu conhecimento em desenvolvimento web com Node.js.

### Apoio

- https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-pt
- https://dev.to/thiagomr/como-funciona-o-express-js-criando-um-http-server-express-like-do-zero-sem-frameworks-125p
- https://expressjs.com/pt-br/starter/hello-world.html
- https://www.geeksforgeeks.org/what-are-the-differences-between-http-module-and-express-js-module/
