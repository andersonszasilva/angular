import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TransacoesModule } from './transacoes/transacoes.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransacoesModule,
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
