import express from "express";

const app = express();
// Middleware: são utilizados para ter acesso as requisições e respostas no momento que estao sendo feitas, e fazer modificá-las.
// Middleware usado para converter o que chega, para o formato JSON.
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

// Função para buscar um livro por id.
function buscaLivro(id){
    // findIndex(): método array que retorna o index do elemento que satisfazer a condição.
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

// get() é um método usado para definir uma rota e especificar o que deve acontecer quando uma solicitação HTTP do tipo GET é feita para essa rota especificada.
// get() recebe dois parâmetros: PORTA e FUNÇÃO CALLBACK com os parâmetros req e res.
app.get("/", (req, res) => {
    res.status(200).send("Curso de Express.js");
});

// criação da rota "livros"
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});


app.get("/livros/:id", (req, res) => { // Quando usamos dois pontos :, informamos ao express que essa é uma informação variável, ou seja, dinâmica.
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body); // push(): método array para adicionar elementos.
    res.status(201).send("Livro cadastrado com sucesso."); // 201: código para registro criado com sucesso.
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1); // deletar um elemento no index especificado no parâmetro.
    res.status(200).send("Livro removido com sucesso.");
});

export default app