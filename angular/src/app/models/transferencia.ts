export class Transferencia {

    constructor(idUserLog = null, numCuenta = '', valor = null) {
        this.idUserLog = idUserLog;
        this.numCuenta = numCuenta;
        this.valor = valor;
    }
    idUserLog: number;
    numCuenta: string;
    valor : number;
    
}
