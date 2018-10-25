import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  constructor(private bancoService: BancoService) { }

  ngOnInit() {
  }

}
