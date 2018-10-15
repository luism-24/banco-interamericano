const controll = {};

controll.registre = (req, res) => {

    var nombre = 'Felipe';

    req.getConnection((err, conect) => {

        conect.query('INSERT INTO users(nombre) VALUES(?)', [nombre], (err) => {

            if (err) {
                console.log(err);
            } else {
                res.json({
                    data: 'Guardado'
                })
            }
            
        });

    });


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