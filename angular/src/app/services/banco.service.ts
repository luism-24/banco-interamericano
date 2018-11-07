import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Pais } from '../models/pais';
import { Credencial } from '../models/credenciales';
import { Transferencia } from '../models/transferencia';
import { Retirar } from '../models/retiro';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  myUser: User;
  userLog: {};
  paises: Pais[];
  credencial: Credencial;
  logeado: boolean;
  transferencia: Transferencia;
  retiro: Retirar;

  readonly URL_API = 'http://localhost:4000/banco-interamericano';

  constructor(private http: HttpClient) {
    this.myUser = new User();
    this.userLog = new User();
    this.credencial = new Credencial();
    this.transferencia = new Transferencia();
    this.retiro = new Retirar();
    this.isLogged();
  }

  register(user: User) {
    user.rol = 2;
    return this.http.post(this.URL_API + "/registro", user);
  }
  getPaises() {
    return this.http.get(this.URL_API);
  }
  login(crendential: Credencial) {

    return this.http.post(this.URL_API + "/login", crendential);

  }

  isLogged() {
    return this.http.get(this.URL_API + "/logeado");
  }

  getUserLogged() {
    return this.http.get(this.URL_API + "/userLog");
  }

  transferir(tranfer: Transferencia){

    return this.http.post(this.URL_API +'/tranferencia', tranfer);

  }

  retirar(retire: Retirar){
    return this.http.post(this.URL_API+'/retiro', retire);

  }


}
