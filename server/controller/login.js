const controller = {};

//Conexion de la bd postgres
const connection = require('../conect/conection');
//JSONWEBTOKEN 
const jwt = require('jsonwebtoken');
var user;
var logeado = false;


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
            process.env.TOKEN = jwt.sign({ id: user.id }, SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            console.log(process.env.TOKEN);

            logeado = true;


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

controller.generateToken = (req, res) => {

    let SECRET = "SECRETO_PARA_ENCRIPTACION"

    process.env.TOKEN = jwt.sign(user, SECRET);
    res.json({
        token: process.env.TOKEN
    });

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
module.exports = controller; 