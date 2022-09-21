//Giovanna Rotoli
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarReserva(request, response){
        try{
            const sql = 'select reserv_id, dt_lista, codlivro_id, user_id, ativo from reserva_livro;'
            const reserva_livro =  await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: reserva_livro[0].length, message: reserva_livro[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async create(request, response) {
        try {
                // parâmtros passados via corpo da requisição
            const {dt_lista, codlivro_id, user_id, ativo} = request.body;  
                // instrução sql para inserção
            const sql = 'INSERT INTO reserva_livro(dt_lista, codlivro_id, user_id, ativo) VALUES (?, ?, ?, ?);'; 
                // definição de array com os parâmetros que receberam os valores do front-end
            const values = [dt_lista, codlivro_id, user_id, ativo]; 
                // executa a instrução de inserção no banco de dados       
            const confirmacao = await db.query(sql, values);
                // Exibe o id do registro inserido
            const reserv_id = confirmacao[0].insertId; 
                // Mensagem de retorno no formato JSON
            return response.status(200).json({confirma: 'Sucesso', message: reserv_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    }, 
};
