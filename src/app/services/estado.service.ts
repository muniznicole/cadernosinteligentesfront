import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  
  private baseUrl = 'http://localhost:8080/estados';

  constructor(private httpClient: HttpClient) {  }

  buscarTodos(page?: number, pageSize?: number): Observable<Estado[]> {
    // variavel de escopo de bloco
    let params = {};

    if (page !== undefined && pageSize !== undefined) {
      params = {
        page: page.toString(),
        pageSize: pageSize.toString()
      }
    }

    return this.httpClient.get<Estado[]>(`${this.baseUrl}`, {params});
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/count`);
  }

  buscar(id: string): Observable<Estado> {
    return this.httpClient.get<Estado>(`${this.baseUrl}/${id}`);
  }

  inserir(estado: Estado): Observable<Estado> {
    return this.httpClient.post<Estado>(this.baseUrl, estado);
  }
  
  alterar(estado: Estado): Observable<Estado> {
    return this.httpClient.put<Estado>(`${this.baseUrl}/${estado.id}`, estado);
  }

  deletar(estado: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${estado}`);
  }

}