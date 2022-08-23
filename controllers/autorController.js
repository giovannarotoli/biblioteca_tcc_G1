const {json} = require("express");
const db = require("../database/connection");

module.export={
    async  listarAutor(request, response){
        try{
            return response.status(200).json({confirma: 'Autor'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
