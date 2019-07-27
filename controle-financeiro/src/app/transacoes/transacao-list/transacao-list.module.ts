import { NgModule } from '@angular/core';
import { TransacaoListComponent } from './transacao-list.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByName } from './filter-by-name.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TransacaoListComponent,
        TransacoesComponent,
        LoadButtonComponent,
        FilterByName
    ],
    imports: [CommonModule]
})
export class TransacaoListModule {

}