import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ BancoService ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

 

}
