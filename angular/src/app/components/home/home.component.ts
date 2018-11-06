import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BancoService]
})
export class HomeComponent implements OnInit {

  constructor(private bancoService: BancoService) { }

  ngOnInit(form?: NgForm) {
  }

}


