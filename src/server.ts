import express from 'express';
import "./database";

const app = express();

app.get('/', (req, res) => {
    return res.send("nlw5")
})

app.listen(3333, () => console.log("Ta rodando na porta 3333"));