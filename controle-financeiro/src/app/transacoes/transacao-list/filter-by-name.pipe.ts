import { Pipe, PipeTransform } from '@angular/core';
import { Transacao } from '../transacao/transacao';

@Pipe({ name: 'filterByName'})
export class FilterByName implements PipeTransform {
    
    transform(transacoes: Transacao[], nameQuery: string) {

        nameQuery =  nameQuery
            .trim()
            .toLowerCase()
        
        if(nameQuery) {
            return transacoes.filter(transacao =>
                transacao.name.toLowerCase().includes(nameQuery)
            );
        }else {
            return transacoes;
        }
    }

}