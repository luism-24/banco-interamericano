import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  providers: [BancoService]
})
export class TransferComponent implements OnInit {

  constructor(private bancoService: BancoService) { }

  ngOnInit() {
  }

  transferUser(form: NgForm){

    console.log(form.value);  
    
  }

}
