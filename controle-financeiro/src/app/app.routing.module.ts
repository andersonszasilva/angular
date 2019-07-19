import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransacaoListComponent } from './transacoes/transacao-list/transacao-list.component';
import { TransacaoFormComponent } from './transacoes/transacao-form/transacao-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
     { path: 'transacao/list', component: TransacaoListComponent },
     { path: 'transacao/form', component: TransacaoFormComponent },
     { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}