const controll = {};

//Conexion de la bd postgres
const connection = require('../conect/conection');

controll.getOperacionesById = (req, res) => {

    connection.query('SELECT * FROM operaciones', (err, operaciones) => {

        if (err) {
            console.log(err);

        } else {
            res.send(operaciones.rows);
        }

    });
}
controll.getOperacionesByType = (req, res) => {

    let index = req.params.id;
    connection.query(`SELECT * FROM operaciones WHERE id_tipoO = ${index}`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            try {
                let operaciones = data.rows.map(async result => {
                    const idUsuarioRealiza = await connection.query(`SELECT * FROM usuarios WHERE id = ${result.id_usuario_realiza}`);
                    const idUsuarioDestino = await connection.query(`SELECT * FROM usuarios WHERE id = ${result.id_usuario_destino}`);
                    let operacion = {
                        id: result.id,
                        monto: result.monto,
                        fecha: result.fecha,
                        usuario_realiza: idUsuarioRealiza.rows[0],
                        usuario_destino: idUsuarioDestino.rows[0],
                    }
                    return operacion
                })
                Promise.all(operaciones).then(respone => res.json(respone));
            } catch (err) {
                console.log(err)
            }
        }
    });

}
controll.setOperaciones = () => {
    const id =  req.body.id;
    const monto = req.body.monto;
    const fecha = req.body.fecha; 
    const id_usuario_realiza = req.body.usuario_realiza; 
    const id_usuario_destino = req.body.usuario_destino;
    const id_tipoO = req.body.tipo; 

    
}
module.exports = controll;