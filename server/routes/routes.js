const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', (req, res) => {

    res.send('Hola banco');

});
router.post('/banco-interamericano/registro', controller.registre);
router.post('/banco-interamericano/login', controller.login);
router.post('/banco-interamericano/consignacion', controller.consignment);
router.post('/banco-interamericano/retiro', controller.retirement);
router.post('/banco-interamericano/transferencia', controller.transfer);

module.exports = router;