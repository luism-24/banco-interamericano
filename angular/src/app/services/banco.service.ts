import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Pais} from '../models/pais';
import { Credencial } from '../models/credenciales';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  myUser: User;
  paises: Pais[];
  credencial: Credencial;

  readonly URL_API = 'http://localhost:4000/banco-interamericano';

  constructor(private http: HttpClient) {
    this.myUser = new User();
    this.credencial = new Credencial();
  }

  register(user: User) {  
    user.rol = 2;
    return this.http.post(this.URL_API+"/registro", user);
  }
  getPaises(){
    return this.http.get(this.URL_API);
  }
  login(crendential: Credencial){

    return this.http.post(this.URL_API+"/login", crendential);

  }


}
