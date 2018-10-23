import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {
 title4 = "consignación"

 constructor(private bancoService: BancoService) { }

 ngOnInit() { }

 registerUser(form?: NgForm){

   console.log(form.value);
   this.bancoService.register(form.value);
   
 }

}
