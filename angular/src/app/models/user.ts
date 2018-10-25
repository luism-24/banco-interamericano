export class User {

    constructor(nombre = '', correo = '', telefono = '', 
    contrasena = '', id_pais = '', numCuenta = '') {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.id_pais = id_pais;
        this.numCuenta = numCuenta;
    }
    nombre: string;
    correo : string;
    telefono : string;
    contrasena : string;
    id_pais : string;
    numCuenta : string;    

}