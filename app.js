const express = require("express");
const app = express();
const port = 3000;

// Rota principal que retorna o HTML solicitado
app.get("/", (req, res) => {
    res.send("<h1>Hello World 123</h1>");
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
