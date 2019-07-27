import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TransacaoListModule } from './transacao-list/transacao-list.module';
import { TransacaoFormModule } from './transacao-form/transacao-form.module';
import { TransacaoModule } from './transacao/transacao.module';

@NgModule({
    imports: [
        TransacaoModule,
        TransacaoListModule,
        TransacaoFormModule
    ],
})
export class TransacoesModule {

}