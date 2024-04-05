import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Disco } from '../../../models/disco.model';
import { DiscoService } from '../../../services/disco.service';

@Component({
  selector: 'app-disco-list',
  standalone: true,
  imports: [
    NgFor, 
    MatTableModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    RouterModule
  ],
  templateUrl: './disco-list.component.html',
  styleUrl: './disco-list.component.css'
})
export class DiscoListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'precoUnitario', 'estoque', 'cor', 'acao'];
  discos: Disco[] = [];

  constructor(
    private discoService: DiscoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.discoService.buscarTodos().subscribe(data => {
      this.discos = data;
      console.log(this.discos)
    })
    this.atualizarLista();
  }

  excluir(id: number) {
    this.discoService.deletar(id).subscribe(
      () => {
        this.snackBar.open('Disco excluído com sucesso', 'Fechar', {
          duration: 2000,
        });
        this.atualizarLista();
      },
      error => {
        this.snackBar.open('Erro ao excluir disco', 'Fechar', {
          duration: 2000,
        });
      }
    );
  }

  atualizarLista() {
    this.discoService.buscarTodos().subscribe(
      discos => {
        this.discos = discos;
      },
      error => {
        console.log('Erro ao buscar disco:', error);
      }
    );
  }

}
