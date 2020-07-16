const user = require('../modelos/login');
module.exports = function(app) {

    app.get('/usuarios', (req, res) => {
        user.getValidarUsuario((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al buscar usuarios:' + err
                });
            } else {
                res.json({
                    success: true,
                    respuesta: data,
                    mensaje: "consulta con exito"

                })

            }
        });
    });

}