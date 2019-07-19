import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-transacao-list',
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit {

  transacoes: Object[] = [];

  constructor(private transacaoService: TransacaoService) { }

  ngOnInit(): void {
    this.transacaoService.listFromUser('bruna@test.com')
      .subscribe(transacoes => {
        this.transacoes = transacoes
        console.log(transacoes[0].category.name);
      });

  }
}
