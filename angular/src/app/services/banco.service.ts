import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Pais} from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  myUser: User;
  paises: Pais[];

  readonly URL_API = 'http://localhost:4000/banco-interamericano';

  constructor(private http: HttpClient) {
    this.myUser = new User();
  }

  register(user: User) {  
    return this.http.post(this.URL_API+"/registro", user);
  }
  getPaises(){
    return this.http.get(this.URL_API);
    
  }
  login(crendentials){

    return this.http.post(this.URL_API+"/login", crendentials)

  }


}
