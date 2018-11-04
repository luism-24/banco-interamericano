const express = require('express');
const router = express.Router();

//Conexion de la bd postgres
const conec = require('../conect/conection');

const controller = require('../controller/controller');

router.get('/', (req, res) => {

    conec.query('SELECT * FROM paises', (err, paises) => {

        if (err) {
            console.log(err);

        } else {

            res.send(paises.rows);

        }

    });

});
router.post('/registro', controller.registre);
router.post('/login', controller.login);
router.post('/consignacion', controller.consignment);
router.post('/retiro', controller.retirement);
router.post('/transferencia', controller.transfer);

module.exports = router;