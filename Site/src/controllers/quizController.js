var quizModel = require("../models/quizModel");

var sessoes = [];

function tentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var resposta1 = req.body.resposta1Server;
    var resposta2 = req.body.resposta2Server;
    var resposta3 = req.body.resposta3Server;
    var resposta4 = req.body.resposta4Server;
    var acertos = req.body.acertosServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Sem usuário!!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.tentativa(fkUsuario, resposta1, resposta2, resposta3, resposta4, acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar a tentativa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function feedback(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tipo = req.body.tipoServer;
    var titulo = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Sem usuário!!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.feedback(tipo, titulo, conteudo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar a tentativa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function ranking(req, res) {
    quizModel.ranking()
    .then(function (resultado) {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function verFeedback(req, res) {
    quizModel.verFeedback()
    .then(function (resultado) {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    tentativa,
    ranking,
    feedback,
    verFeedback
}