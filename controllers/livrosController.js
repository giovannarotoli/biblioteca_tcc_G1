//Giovanna Rotoli
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarLivros(request, response){
        try {
            const sql = 'select codlivro_id, nome_livro, edicao_livro, quant_de_paginas, ano_de_plublicacao, isbn, codedit_id, un_disponiveis,classic_id from cadastro_livro;';
            const livros = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: livros[0].length, message: livros[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async create(request, response) {
        try {
                // parâmtros passados via corpo da requisição
            const {nome_livro, edicao_livro, quant_de_paginas, ano_de_plublicacao, isbn, codedit_id, un_disponiveis, classic_id} = request.body;  
                // instrução sql para inserção
            const sql = 'INSERT INTO cadastro_livro (nome_livro, edicao_livro, quant_de_paginas, ano_de_plublicacao, isbn, codedit_id, un_disponiveis, classic_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; 
                // definição de array com os parâmetros que receberam os valores do front-end
            const values = [nome_livro, edicao_livro, quant_de_paginas, ano_de_plublicacao, isbn, codedit_id, un_disponiveis, classic_id]; 
                // executa a instrução de inserção no banco de dados       
            const confirmacao = await db.query(sql, values);
                // Exibe o id do registro inserido
            const codlivro_id = confirmacao[0].insertId; 
                // Mensagem de retorno no formato JSON
            return response.status(200).json({confirma: 'Sucesso', message: codlivro_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    }, 
};