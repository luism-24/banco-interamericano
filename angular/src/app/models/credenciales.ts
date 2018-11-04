export class Credencial {

    constructor(nombre = '', contrasena = '', codigo = '') {
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.codigo = codigo;
    }
    nombre: string;
    contrasena : string;
    codigo: string;
    
}