import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../../services/banco.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BancoService]
})
export class LoginComponent implements OnInit {

  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit() {
    this.logeado();
  }

  loginUser(form?: NgForm) {
    console.log(form.value);

    this.bancoService.login(form.value)
      .subscribe(res => {
        if (this.bancoService.logeado == false) {

          M.toast({ html: "Usuario no logeado" });
          M.toast({ html: "Ingrese datos correctos" });
        
        }else{
          M.toast({ html: "Redirecccionando a la pantalla principal..." });
          this.router.navigate(['/home',]);
        }
      });



    if (this.bancoService.logeado == true) {
      console.log('entré');
    }



  }

  logeado() {
    var estaLOgg = this.bancoService.isLogged()
      .subscribe(res => {
        this.bancoService.logeado = res as boolean;
      });

  }



}
