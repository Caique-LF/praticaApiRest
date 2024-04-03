const alunos = require("../dados/alunos");

const listarAlunos = (req, res) =>{
    res.json(alunos)
};

module.exports = {
    listarAlunos
} 