import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ BancoService ]
})
export class BancoComponent implements OnInit {

  dato = 'Banco Interamericano';

  constructor(private bancoService: BancoService) { }

  ngOnInit() { }

  registerUser(form?: NgForm){

    console.log(form.value);
    this.bancoService.register(form.value);
    
  }

}
