const express = require('express');
const { listarAlunos, obterAlunoPorId } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:id', obterAlunoPorId)

module.exports= rotas