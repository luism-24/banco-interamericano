const express = require('express');
const router = express.Router();

//Conexion de la bd postgres
const conec = require('../conect/conection');

const controller = require('../controller/controller');

router.get('/', (req, res) => {

    conec.query('SELECT * FROM dueños', (err, data) => {

        if (err) {
            console.log(err);

        } else {

            res.json({
                data: data.rows
            });

        }

    });

});
router.post('/registro', controller.registre);
router.post('/login', controller.login);
router.post('/consignacion', controller.consignment);
router.post('/retiro', controller.retirement);
router.post('/transferencia', controller.transfer);

module.exports = router;