//Gabi
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarAutor(request, response){
        try {
            const sql = 'select codaut_id, nomeaut, dat_nascimento, loc_nascimento, foto, biografia from autor;';
            const autor = await db.query(sql);
            return response.status(200).json({confirma: 'sucesso', nresults: autor[0]. length, message: autor[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
