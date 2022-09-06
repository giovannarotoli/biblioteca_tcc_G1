//Giovanna Rotoli
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarLivros(request, response){
        try {
            const sql = 'select codlivro_id, nome_livro, edicao_livro, quant_de_paginnas, ano_de_plublicacao, isbn, codedit_id, un_disponiveis,classic_id from cadastro_livro;';
            const livros = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: livros[0].length, message: livros[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};