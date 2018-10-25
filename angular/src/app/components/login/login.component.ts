import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BancoService]
})
export class LoginComponent implements OnInit {

  constructor(private bancoService: BancoService) { }

  ngOnInit() { }

  loginUser(form?: NgForm) {
    console.log(form.value);
    this.bancoService.login(form.value)
      .subscribe(res => {
        M.toast({ html: "" });
      });
  }



}
