import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cor } from '../models/cor.model';

@Injectable({
    providedIn: 'root'
})
export class CorService {

    // Path definido no backend em resource
    private baseUrl = 'http://localhost:8080/cores'

    constructor(private httpClient: HttpClient) { }

    // Find all
    buscarTodos(): Observable<Cor[]> {
        return this.httpClient.get<Cor[]>(this.baseUrl);
    }

    // Find by id
    buscar(id: string): Observable<Cor> {
        return this.httpClient.get<Cor>(`${this.baseUrl}/${id}`);
    }

    // O nome deve estar de acordo com o nome do método no backend em resource
    inserir(cor: Cor): Observable<Cor> {
        return this.httpClient.post<Cor>(this.baseUrl, cor);
    }
      
    alterar(cor: Cor): Observable<Cor> {
        return this.httpClient.put<Cor>(`${this.baseUrl}/${cor.id}`, cor);
    }
    
    deletar(cor: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/${cor}`);
    }

}
