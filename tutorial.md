# Criação de um servidor com ExpressJS

### Criação do arquivo package.json:
- No terminal, dentro da pasta criada, digite: npm init -y.
- No package.json, adicionar a propriedade "type": "module" (propriedade para permitir usar o import e export com a sintaxe mais moderna do JavaScript).

### Instalação do framework ExpressJS:
// nesse app utilizamos está versão, mas no site do express podemos pegar a versão mais atualizada.
- Digite no terminal: npm install express@4.18.1  

### Instalação da biblioteca Nodemon:
**NODEMON:**
Precisamos ficar derrubando e subindo o servidor a cada atualização, pois uma vez que o servidor sobe, ele não recebe as alterações do código a não ser que seja restartado.
Para isso, utilizaremos a biblioteca nodemon do node para realizar o restart a cada nova mudança no código.

- na parte de scripts do package.json, adicione o script: "dev": "nodemon server.js";

### Código inicial.
#### Com o arquivo JS criado:

- Importe o express.
- Defina uma variável que irá executar a função express();
- Crie a primeira rota usando o método app.get();
- Exporte o servidor que acabamos usando o recurso do JS "EXPORT";
- Em outro arquivo JS, importe o servidor usando o recurso do JS "IMPORT";
- Execute o método listen() com os parâmetros PORTA e função callback para saber se está funcionando;