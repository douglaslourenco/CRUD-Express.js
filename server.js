// Aqui criaremos um servidor local utilizand o ExpressJS.

const PORT = 3000;

import app from "./src/app.js"; 

// listen é usado para trabalhar com eventos, ou seja, esse método aguarda a solicitação em uma determinada porta e retorna uma resposta.
app.listen(PORT, () => {
    console.log("servidor escutando!");
});