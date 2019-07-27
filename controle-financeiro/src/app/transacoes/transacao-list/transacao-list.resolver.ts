import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Transacao } from '../transacao/transacao';
import { TransacaoService } from '../transacao/transacao.service';

@Injectable({ providedIn: 'root'})
export class TransacaoListResolver implements Resolve<Observable<Transacao[]>> {
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transacao[]>  {
        const username = route.params.username;
        return this.service.listFromUserPaginated(username, 1);
    }

    constructor(private service: TransacaoService) {}
}