import express from "express";

const app = express();


app.get('/', (req, res) => {
    return res.send("Olá Mundo")
})
app.post('/teste', (req, res) => {
    return res.send("Olá Metodo Post")
})

app.listen(3000, () => console.log("Servidor Rodando ..."));