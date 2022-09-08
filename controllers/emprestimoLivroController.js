//Gabi
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEmprestimoLivro(request, response){
        try{
            const sql = 'select emprest_id, codlivro_id, user_id, dt_emprest, dtt_devolucao, devolvido from esmprestimo_livro;';
            const emprestimo_livro = await db.query(sql);
            return response.status(200).json({confirma: 'sucesso', nresults: emprestimo_livro [0]. length, message: emprestimo_livro [0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
