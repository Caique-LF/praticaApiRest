const ValidarSenhaRequisicao = (req, res, next) =>{
    const {senha} = req.query

    if(senha !== "pratica123"){
        return res.status(401).json({mensagem : "A senha informada não é válida."})
    
    }

    next()
};

module.exports = ValidarSenhaRequisicao