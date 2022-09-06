//ana
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarAutorLivro(request, response){
        try {
            const sql = 'select codaut_id, codlivro_id from autor_livro;';
            const Autor_livro = await db.query(sql)
            return response.status(200).json({confirma: 'sucesso', nresults: Autor_livro [0]. lenght, message: Autor_livro [0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
