const {json} = require("express");
const db = require("../database/connection");

module.export={
    async  listarReserva(request, response){
        try{
            return response.status(200).json({confirma: 'Reserva'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
