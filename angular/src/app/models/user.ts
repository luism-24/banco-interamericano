export class User {

    constructor(nombre = '', correo = '', telefono = '', 
    contrasena = '', id_pais = '', rol=null, numCuenta = '') {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.id_pais = id_pais;
        this.rol = rol;
        this.numCuenta = numCuenta;
    }
    nombre: string;
    correo : string;
    telefono : string;
    contrasena : string;
    id_pais : string;
    rol: number;
    numCuenta : string;    

}