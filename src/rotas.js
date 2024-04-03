const express = require('express');
const { listarAlunos, obterAlunoPorId, cadastrarAluno } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:id', obterAlunoPorId)
rotas.post('/alunos/', cadastrarAluno)
module.exports= rotas