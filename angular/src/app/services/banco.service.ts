import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  myUser: User;

  readonly URL_API = 'http://localhost:3000/banco-interamericano/registro';

  constructor(private http: HttpClient) {
    this.myUser = new User();
  }

  register(user: User) {
    return this.http.post(this.URL_API, user);
  }


}
