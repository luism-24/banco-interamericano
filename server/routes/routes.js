const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

router.get('/', (req, res) => {

    req.getConnection((err, conect) => {

        conect.query('SELECT * FROM users', (err, users) => {

            res.json(users);

        });

    });

});
router.post('/registro', controller.registre);
router.post('/login', controller.login);
router.post('/consignacion', controller.consignment);
router.post('/retiro', controller.retirement);
router.post('/transferencia', controller.transfer);

module.exports = router;