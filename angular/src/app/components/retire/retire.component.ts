import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';
import { Retirar } from 'src/app/models/retiro';

declare var M: any;

@Component({
  selector: 'app-retire',
  templateUrl: './retire.component.html',
  styleUrls: ['./retire.component.css'],
  providers: [BancoService]
})
export class RetireComponent implements OnInit {
  
  

  constructor(private bancoService: BancoService) { }

  ngOnInit() {}


  retirUser(form: NgForm){

    console.log(form.value);  
    this.bancoService.register(form.value)
    .subscribe(res => {
      this.clearForm(form);
      M.toast({html: 'Registro exitoso'});
    });
 
  }
  clearForm(form?: NgForm){

    if(form){
      form.resetForm();
      this.bancoService.retiro = new Retirar();
    }

  }
}
