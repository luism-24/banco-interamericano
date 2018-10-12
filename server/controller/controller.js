const controll = {};

controll.registre = (req, res) => {

    res.send('Registro de usuario');

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