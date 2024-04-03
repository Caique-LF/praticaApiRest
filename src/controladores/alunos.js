const alunos = require("../dados/alunos");

let idProximoAluno = 1

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
        return res.status(404).json({mensagem: 'Aluno não encontrado'})
    };

    res.json(aluno)
}

const cadastrarAluno = (req,res)=>{
    const {nome, sobrenome, idade, curso} = req.body;

    if(!nome) {
        return res.status(400).json({mensagem : "O nome deve ser informado."});    
    }

    if(!sobrenome) {
        return res.status(400).json({mensagem : "O sobrenome deve ser informado."});    
    }

    if(!idade) {
        return res.status(400).json({mensagem : "A idade deve ser informada."});    
    }

    if(!curso) {
        return res.status(400).json({mensagem : "O curso deve ser informado."});    
    }

    const novoAluno = {
        id : idProximoAluno,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(novoAluno);
    
    idProximoAluno++

    res.status(201).send()
};

const excluirAluno = (req, res)=> {
    const idRequisitado = Number(req.params.id)

    if(isNaN(idRequisitado)){
        return res.status(400).json({mensagem : "O id informado não é um numero"});
    }

    const indiceAlunoExclusão= alunos.findIndex((aluno)=>{
       return aluno.id === idRequisitado;
    })

    if(indiceAlunoExclusão <0){
        return res.status(404).json({mensagem: 'Aluno não encontrado'})
    };

    const alunoExcluido = alunos.splice(indiceAlunoExclusão, 1)[0];

    return res.json(alunoExcluido);

}

module.exports = {
    listarAlunos,
    obterAlunoPorId,
    cadastrarAluno,
    excluirAluno
} 