//ana
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarClassificacao(request, response){
        try{
            const sql = 'select classic_id, codclassifacao, descricao_classic from classificacao;';
            const classificacao = await db.query(sql)
            return response.status(200).json({confirma: 'sucesso', nresults: classificacao [0]. lenght, message: classificacao [0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
