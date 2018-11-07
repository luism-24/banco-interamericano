const controller = {};

//Conexion de la bd postgres
const connection = require('../conect/conection');
//JSONWEBTOKEN 
const jwt = require('jsonwebtoken');
var user;
var token;
var logeado = false;

//Para enviar el codigo de confirmación 
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: '68e571d2',
    apiSecret: 'iMePsw81Iwv6CWFk'
});
var numero = '3187934956';


function aleatorio(inferior, superior) {
    let resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
}

controller.login = async (req, res) => {

    console.log(req.body);
    const nombre = req.body.nombre;
    const contraseña = req.body.contrasena;
    const code = req.body.codigo;

    try {
        const consulta = await connection.query(`SELECT * FROM usuarios WHERE nombre LIKE '${nombre}%'`);

        if (consulta.rows && consulta.rows[0].contraseña === contraseña &&
            consulta.rows[0].codigo === code) {

            user = consulta.rows;


            let SECRET = "SECRETO_PARA_ENCRIPTACION"

            //process.env.TOKEN = jwt.sign(user[0].nombre, SECRET, {expiresIn: 30});
            process.env.TOKEN = jwt.sign({ id: user[0].id }, SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            token = process.env.TOKEN;
            console.log(process.env.TOKEN);

            logeado = true;

            res.header('Authorization', "Bearer " + process.env.TOKEN);


        } else {
            logeado = false;
            res.json({
                message: 'Cuenta inexistente o contraseña incorrecta'
            });
        }
    } catch (err) {
        console.log(err);
    }
}

controller.logeado = (req, res) => {

    res.send(logeado);

};

controller.userLogeado = (req, res) => {

    if (user !== undefined) {
        var id = user[0].id;

        connection.query("SELECT * FROM USUARIOS WHERE id=$1", [id], (err, userLog) => {

            if (err) {
                console.log(err);

            } else {
                res.send(userLog.rows);
            }

        });

    } else {
        res.send('No hay usuario logeado');
    }

}

controller.registre = (req, res) => {

    /*var nombre = req.body.nombre;
    var correo = req.body.correo;
    var telefono = req.body.telefono;
    var contraseña = req.body.contrasena;
    var idPais = req.body.id_pais;
    var idRol = req.body.rol;
    var numCuenta = req.body.numCuenta;

    console.log(req.body);

    res.send('Registro de usuarios');
    /////////////////Se toma el numero ingresado si se registra correctamente//////////////
    process.env.CELLCODE = aleatorio(1000, 9000);
    console.log(process.env.CELLCODE);

    nexmo.message
        .sendSms('573135058005', '57' + numero, 'Codigo de inicio: ' + process.env.CELLCODE,
            (error, responseData) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(responseData)
                };

            }
        );
    ///////////////////////////////////////////////////////////
    conec.query("INSERT INTO USUARIOS (nombre, correo, telefono, contraseña, codigo, id_pais, id_rol, numCuenta) values($1, $2, $3, $4, $5, $6, $7, $8)",
        [nombre, correo, telefono, contraseña, process.env.CELLCODE, idPais, idRol, numCuenta], (err) => {
            if (err) {
                console.log(err);

            } else {
                console.log('Usuario Registrado');

            }
        });*/
}

controller.consignment = (req, res) => {

    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'SECRETO_PARA_ENCRIPTACION', function (err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        } else {
            res.send({
                token: token
            })
        }
    })



}

controller.retirement = (req, res) => {

    res.send('Se hacen los retiros');

}

controller.transfer = (req, res) => {

    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'SECRETO_PARA_ENCRIPTACION', function (err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        } else {
        
            console.log(req.body);
            
            
        }
    })



}


controller.refreshToken = (req, res) => {
    const allowRefresh = req.body.allowRefresh;
    let SECRET = "SECRETO_PARA_ENCRIPTACION"
    if (allowRefresh) {
        process.env.TOKEN = jwt.sign(user, SECRET);
        res.json({
            token: process.env.TOKEN
        });
    } else {
        res.json({
            message: "Acción no permitida"
        })
    }
}
module.exports = controller, token; 