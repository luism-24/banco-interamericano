import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BancoService } from '../../services/banco.service';

declare var M: any;

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  providers: [BancoService]
})
export class TransferComponent implements OnInit {

  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.logeado();
  }

  transferUser(form: NgForm) {

    console.log(form.value);
    console.log(this.bancoService.userLog);
    
    this.bancoService.transferir(form.value, this.bancoService.userLog)
      .subscribe(res => {
        if (this.bancoService.logeado == false) {

          M.toast({ html: "Usuario no logeado" });

        }

        M.toast({ html: 'Transferencia exitosa' });

      });

  }

  userLog(){
    this.bancoService.getUserLogged()
    .subscribe(res => {
      this.bancoService.userLog = res as {};
    })
  }

  logeado() {
    var estaLOgg = this.bancoService.isLogged()
      .subscribe(res => {
        this.bancoService.logeado = res as boolean;
      });

  }

}
