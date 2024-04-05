import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Disco } from '../models/disco.model';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {
    
    private baseUrl = 'http://localhost:8080/discos';

    constructor(private httpClient: HttpClient) {  }

    buscarTodos(): Observable<Disco[]> {
        return this.httpClient.get<Disco[]>(this.baseUrl);
    }

    buscar(id: string): Observable<Disco> {
        return this.httpClient.get<Disco>(`${this.baseUrl}/${id}`);
    }

    inserir(disco: Disco): Observable<Disco> {
        const data = {
            nome: disco.nome,
            descricao: disco.descricao,
            precoUnitario: disco.precoUnitario,
            estoque: disco.estoque,
            cor: disco.cor.id,
        }
        return this.httpClient.post<Disco>(this.baseUrl, data);
    }
    
    alterar(disco: Disco): Observable<Disco> {
        const data = {
            nome: disco.nome,
            descricao: disco.descricao,
            precoUnitario: disco.precoUnitario,
            estoque: disco.estoque,
            cor: disco.cor.id,
        }
        return this.httpClient.put<Disco>(`${this.baseUrl}/${disco.id}`, data);
    }

    deletar(disco: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/${disco}`);
    }

}