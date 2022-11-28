var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function tentativa(fkUsuario, resposta1, resposta2, resposta3, resposta4, acertos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, resposta1, resposta2, resposta3, resposta4, acertos);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO tentativaquiz (fkUsuario, resposta1, resposta2, resposta3, resposta4, acertos, dataHora) VALUES ('${fkUsuario}', '${resposta1}', '${resposta2}', '${resposta3}', '${resposta4}', '${acertos}', now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function feedback(tipo, titulo, conteudo, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tipo, titulo, conteudo, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    // e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO feedback (tipo, titulo, conteudo, fkUsuario) VALUES ('${tipo}', '${titulo}', '${conteudo}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ranking() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT nome, acertos, timestampdiff(minute, dataHora, now()) as tempo, round((acertos * (100 / 4)),0) as aproveitamento FROM tentativaquiz join usuario on idUsuario = fkusuario order by acertos desc limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verFeedback() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT count(idFeedback) as tem, idUsuario from feedback join usuario on idUsuario = fkUsuario group by idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    tentativa,
    ranking,
    feedback,
    verFeedback
};