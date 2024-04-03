const express = require('express');
const { listarAlunos, obterAlunoPorId, cadastrarAluno, excluirAluno } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:id', obterAlunoPorId)
rotas.post('/alunos/', cadastrarAluno)
rotas.delete('/alunos/:id', excluirAluno)
module.exports= rotas