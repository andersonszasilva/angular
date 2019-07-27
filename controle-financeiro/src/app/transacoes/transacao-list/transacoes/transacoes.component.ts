import { Component, OnInit, Input } from '@angular/core';
import { Transacao } from '../../transacao/transacao';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {

  @Input() transacoes: Transacao[] = []
  
  constructor() { }

  ngOnInit() {
  }

}
