import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransacaoComponet } from './transacao/transacao.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [TransacaoComponet],
    exports: [TransacaoComponet]
})
export class TransacoesModule {

}