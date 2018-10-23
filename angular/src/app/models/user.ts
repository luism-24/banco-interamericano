export class User {

    constructor(nombre = '', id = '', correo = '', telefono = '', 
    contrasena = '', codigo = '', id_pais = '', id_rol = '',numCuenta = '') {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
        this.codigo = codigo;
        this.id_pais = id_pais;
        this.id_rol = id_rol;
        this.numCuenta = numCuenta;
    }
    nombre: string;
    id : string;
    correo : string;
    telefono : string;
    contrasena : string;
    codigo : string;
    id_pais : string;
    id_rol : string;
    numCuenta : string;    

}