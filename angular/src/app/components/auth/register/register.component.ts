import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../../services/banco.service';
import { NgForm } from '@angular/forms';
import { Pais} from '../../../models/pais';
import { User } from '../../../models/user';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [BancoService]
})
export class RegisterComponent implements OnInit {



  constructor(private bancoService: BancoService) { }

  ngOnInit() { 
    this.paises();
  }

  registerUser(form?: NgForm) {

    console.log(form.value);
    this.bancoService.register(form.value)
    .subscribe(res => {
      this.clearForm(form);
      M.toast({html: 'Registro exitoso'});
    });
    
  }

  paises(){
    this.bancoService.getPaises()
    .subscribe(res => {
      this.bancoService.paises = res as Pais[];
    });
  }

  clearForm(form?: NgForm){

    if(form){
      form.resetForm();
      this.bancoService.myUser = new User();
    }

  }


}
