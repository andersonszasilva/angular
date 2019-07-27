import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { Transacao } from '../transacao/transacao';
import { TransacaoService } from '../transacao/transacao.service';

@Component({
  selector: 'app-transacao-list',
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit, OnDestroy {

  transacoes: Transacao[] = [];
  filter: string = ''
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private transacaoService: TransacaoService

    ) { }

  ngOnInit(): void {
     this.username = this.activatedRoute.snapshot.params.username;
     this.transacoes = this.activatedRoute.snapshot.data.transacoes;
     this.debounce
         .pipe(debounceTime(300))
         .subscribe(filter => {
           return this.filter = filter;
         });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.transacaoService.listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(transacoes => {
        this.transacoes.push(...transacoes);
        if(!transacoes.length) this.hasMore = false;
      });
  }

}
