const controller = {};

//Conexion de la bd postgres
const connection = require('../conect/conection');
//JSONWEBTOKEN 
const jwt = require('jsonwebtoken');
//Para enviar el codigo de confirmación 
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '2d7c6c02',
    apiSecret: '2cGu2VNIFEd4gq2W'
});

function aleatorio(inferior, superior) {
    let resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
}

controller.login = async (req, res) => {
    const numCuenta = req.body.numCuenta;
    const password = req.body.password;

    try {
        const consulta = await connection.query(`SELECT * FROM usuarios WHERE numCuenta LIKE '${numCuenta}%'`);

        if (consulta.rows && consulta.rows[0].contraseña === password) {
            process.env.CELLCODE = aleatorio(1000, 9000);
            console.log(process.env.CELLCODE);
            
            const sms = nexmo.message
                .sendSms('Banco Interamericano', '57' + '3174449447', 'Codigo de inicio: ' + process.env.CELLCODE,
                    (error, responseData) => {
                        if (error) {
                            res.json({
                                message: error
                            })
                        } else {
                            res.json({
                                sendCode: responseData
                            });
                        }
                    });

        } else {
            res.json({
                message: 'Cuenta inexistente o contraseña incorrecta'
            });
        }
    } catch (err) {
        console.log(err);
    }
}

controller.generateToken = (req, res) => {
    const code = req.body.code;
    let SECRET = "SECRETO_PARA_ENCRIPTACION"
    if (code === process.env.CELLCODE) {
        process.env.TOKEN = jwt.sign(code, SECRET);
        res.json({
            token: process.env.TOKEN
        });
    } else {
        res.json({
            message: "Código incorrecto"
        });
    }
}
controller.refreshToken = (req, res) => {
    const allowRefresh = req.body.allowRefresh;
    let SECRET = "SECRETO_PARA_ENCRIPTACION"
    if(allowRefresh){
        process.env.TOKEN = jwt.sign(code, SECRET);
        res.json({
            token: process.env.TOKEN
        }); 
    }else{
        res.json({
            message: "Acción no permitida"
        })
    }
}
module.exports = controller; 