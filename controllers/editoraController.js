//Gabi
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEditora(request, response){
        try{
            const sql = 'select codedit_id, cnpj, nome_edit, local_edit;';
            const editora = await db.query(sql);
            return response.status(200).json({confirma: 'sucesso', nresults: editora[0]. length, message: editora[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
