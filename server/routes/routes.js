const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//Conexion de la bd postgres
const connection = require('../conect/conection');

const controller = require('../controller/controller');
const operacionesController = require('../controller/operaciones');
//all get routes 
router.get('/', (req, res) => {

    connection.query('SELECT * FROM paises', (err, paises) => {

        if (err) {
            console.log(err);

        } else {
            res.send(paises.rows);
        }


    });

});

router.get('/operacionesTipo/:id', operacionesController.getOperacionesByType);
router.get('/operaciones', operacionesController.getOperacionesById);


//all post routes
router.post('/registro', controller.registre);
router.post('/login', controller.login);
router.get('/logeado', controller.logeado);
router.get('/userLog', controller.userLogeado);
router.post('/consignacion', controller.consignment);
router.post('/retiro', controller.retirement);
router.post('/transferencia', controller.transfer);


module.exports = router;