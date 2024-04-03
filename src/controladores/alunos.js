const alunos = require("../dados/alunos");

const listarAlunos = (req, res) =>{
    res.json(alunos)
};

const obterAlunoPorId = (req, res)=>{
    const idRequisitado = Number(req.params.id)

    if(isNaN(idRequisitado)){
        return res.status(400).json({mensagem : "O id informado não é um numero"});
    }

    const aluno= alunos.find((aluno)=>{
       return aluno.id === idRequisitado;
    })

    if(!aluno){
        return res.status(400).json({mensagem: 'Aluno não encontrado'})
    };

    res.json(aluno)
}

module.exports = {
    listarAlunos,
    obterAlunoPorId
} 