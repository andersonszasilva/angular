import { Component } from '@angular/core';

@Component({
    selector: 'app:transacao',
    templateUrl: './transacao.component.html'

})
export class TransacaoComponet {
    transacoes = [
        {
            data: 	'30/06/2019',
            name:  'Conta de Luz de 1',
            valor: '100',
            tipo:  'Saída',
            categoria: 'Despesas de casa'
        },
        {
            data: 	'30/06/2019',
            name:  'Conta de Luz',
            valor: '100',
            tipo:  'Saída',
            categoria: 'Despesas de casa'
        },
    ]
    

}