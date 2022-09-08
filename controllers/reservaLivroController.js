//Giovanna Rotoli
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarReserva(request, response){
        try{
            const sql = 'select reserv_id, dt_lista, codlivro_id, user_id, ativo from reserva_livro'
            const reserva_livro =  await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: reserva_livro[0].length, message: reserva_livro[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
