//Giovanna Rotoli
const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async  listarUsuarios(request, response){
        try{
            const sql = 'select user_id, nome_user, dt_nascimento, rm, email, senha, tipo from usuarios;';
            const Usuarios =  await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: Usuarios[0].length, message: Usuarios[0]});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};
