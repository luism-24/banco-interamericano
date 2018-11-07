export class Retirar {

    constructor(saldo = '', valorRetirar = null, numClave = null) {
        this.saldo = saldo;
        this.valorRetirar = valorRetirar;
        this.numClave = numClave;
    }
    saldo: string;
    valorRetirar : number;
    numClave : number;
    
}