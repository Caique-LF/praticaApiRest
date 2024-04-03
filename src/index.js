const express = require('express');
const rotas = require('./rotas');
const ValidarSenhaRequisicao = require('./intermediarios');

const app = express();

app.use(express.json());

app.use(ValidarSenhaRequisicao);
app.use(rotas);


app.listen(3000)