const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//Conexion de la bd postgres
const connection = require('../conect/conection');

const controller = require('../controller/controller');
const operacionesController = require('../controller/operaciones');
const loginController = require('../controller/login');
//all get routes 
router.get('/', (req, res) => {

    connection.query('SELECT * FROM paises', (err, paises) => {

        if (err) {
            console.log(err);

        } else {
            /*jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: 'foobar'
              }, 'secret', function(err, token) {
                console.log(token);
              });*/
            res.send(paises.rows);
        }


    });

});

router.get('/operacionesTipo/:id', operacionesController.getOperacionesByType);
router.get('/operaciones', operacionesController.getOperacionesById);


//all post routes
router.post('/registro', controller.registre);
router.post('/login', loginController.login);
router.get('/logeado', loginController.logeado);
router.post('/token', loginController.generateToken);
router.post('/consignacion', controller.consignment);
router.post('/retiro', controller.retirement);
router.post('/transferencia', controller.transfer);

module.exports = router;