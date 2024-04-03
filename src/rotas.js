const express = require('express');
const { listarAlunos } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', listarAlunos)

module.exports= rotas