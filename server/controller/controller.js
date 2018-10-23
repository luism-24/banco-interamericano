const controll = {};

//Para enviar el codigo de confirmación 
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '2d7c6c02',
    apiSecret: '2cGu2VNIFEd4gq2W'
});

//Conexion de la bd postgres
const conec = require('../conect/conection');

controll.registre = (req, res) => {

    res.send('Registro de usuarios');
    /////////////////Se toma el numero ingresado si se registra correctamente//////////////
    var numero = '3187934956';
    var mensaje = '4743.';

    nexmo.message.sendSms(
        '573187934956', '57' + numero, 'Codigo de registro: ' + mensaje,
        (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                console.dir(responseData);
            }
        }
    );
    ///////////////////////////////////////////////////////////
}

controll.login = (req, res) => {

    res.send('Ingreso de usuarios');

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


module.exports = controll;