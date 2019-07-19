import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from './transacao';

const API = "http://ec2-13-58-112-99.us-east-2.compute.amazonaws.com:8080/controle-financeiro";

@Injectable({providedIn: 'root'})
export class TransacaoService {

    constructor(private http: HttpClient) {}

    listFromUser(username: string) {
        return this.http
        .get<Transacao[]>(API + "/movements-rest/transacoes");

    }
    
}