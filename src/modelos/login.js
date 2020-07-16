var dbAdmin = require('../conexion_db');

let userModel = {};

userModel.getValidarUsuario = (callback) => {
    if (dbAdmin) {
        dbAdmin.query(`
        SELECT *
        FROM 
        usuarios
         `, (err, rows) => {
            if (err) {
                callback(err, null);
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};



module.exports = userModel;