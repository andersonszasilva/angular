import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TransacaoListComponent } from './transacao-list/transacao-list.component';
import { CommonModule } from '@angular/common';
import { TransacaoFormComponent } from './transacao-form/transacao-form.component';

@NgModule({
    declarations: [TransacaoListComponent, TransacaoFormComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ],
})
export class TransacoesModule {

}