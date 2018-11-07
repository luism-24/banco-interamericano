const controll = {};

//Para enviar el codigo de confirmación 
//Para enviar el codigo de confirmación 
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '68e571d2',
    apiSecret: 'iMePsw81Iwv6CWFk'
});

var numero = '3187934956';

//Conexion de la bd postgres
const conec = require('../conect/conection');

controll.registre = (req, res) => {

    /*var nombre = req.body.nombre;
    var correo = req.body.correo;
    var telefono = req.body.telefono;
    var contraseña = req.body.contrasena;
    var idPais = req.body.id_pais;
    var idRol = req.body.rol;
    var numCuenta = req.body.numCuenta;

    console.log(req.body);

    res.send('Registro de usuarios');
    /////////////////Se toma el numero ingresado si se registra correctamente//////////////
    process.env.CELLCODE = aleatorio(1000, 9000);
    console.log(process.env.CELLCODE);

    nexmo.message
        .sendSms('573135058005', '57' + numero, 'Codigo de inicio: ' + process.env.CELLCODE,
            (error, responseData) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(responseData)
                };

            }
        );
    ///////////////////////////////////////////////////////////
    conec.query("INSERT INTO USUARIOS (nombre, correo, telefono, contraseña, codigo, id_pais, id_rol, numCuenta) values($1, $2, $3, $4, $5, $6, $7, $8)",
        [nombre, correo, telefono, contraseña, process.env.CELLCODE, idPais, idRol, numCuenta], (err) => {
            if (err) {
                console.log(err);

            } else {
                console.log('Usuario Registrado');

            }
        });*/
}

controll.consignment = (req, res) => {

    res.send('Se hacen las consignaciones');

}

controll.retirement = (req, res) => {

    res.send('Se hacen los retiros');

}

controll.transfer = (req, res) => {

    res.send('Se hacen las transferencias');

}

function aleatorio(inferior, superior) {
    var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
}

module.exports = controll;