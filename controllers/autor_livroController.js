const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarAutorLivro(request, response){
        try {
            return response.status(200).json({confirma: 'Autor_livro'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async create(request, response) {
        try {
                // parâmtros passados via corpo da requisição
            const {nome_user, dt_nascimento, rm, email, senha, tipo} = request.body;  
                // instrução sql para inserção
            const sql = 'INSERT INTO USUARIOS (nome_user, dt_nascimento, rm, email, senha, tipo) VALUES (?, ?, ?, ?, ?, ?)'; 
                // definição de array com os parâmetros que receberam os valores do front-end
            const values = [dt_lista, codlivro_id, user_id, ativo]; 
                // executa a instrução de inserção no banco de dados       
            const confirmacao = await db.query(sql, values);
                // Exibe o id do registro inserido
            const user_id= confirmacao[0].insertId; 
                // Mensagem de retorno no formato JSON
            return response.status(200).json({confirma: 'Sucesso', message: user_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    }, 
};
