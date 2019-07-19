import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'

@Component({
    selector: 'app:transacao',
    templateUrl: './transacao.component.html'

})
export class TransacaoComponet {
    transacoes: Object[] = [];
    constructor(http: HttpClient) {
        http
        .get<Object[]>("http://ec2-13-58-112-99.us-east-2.compute.amazonaws.com:8080/controle-financeiro/movements-rest/transacoes")
        .subscribe(transacoes => this.transacoes = transacoes);
        
    }
    

}