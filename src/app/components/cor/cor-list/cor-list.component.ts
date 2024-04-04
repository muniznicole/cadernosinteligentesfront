import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Cor } from '../../../models/cor.model';
import { CorService } from '../../../services/cor.service';

@Component({
  selector: 'app-cor-list',
  standalone: true,
  imports: [
    NgFor,
    MatTableModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    RouterModule,
  ],
  templateUrl: './cor-list.component.html',
  styleUrl: './cor-list.component.css'
})
export class CorListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nomeCor','acao'];
  cores: Cor[] = [];

  constructor (
    private corService: CorService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.corService.buscarTodos().subscribe(data => {
      this.cores = data;
      console.log(this.cores);
    })
    this.atualizarLista();
  }

  excluir(id: number) {
    this.corService.deletar(id).subscribe(
      () => {
        this.snackBar.open('Cor excluída com sucesso', 'Fechar', {
          duration: 2000,
        });
        this.atualizarLista();
      },
      error => {
        this.snackBar.open('Erro ao excluir cor', 'Fechar', {
          duration: 2000,
        });
      }
    );
  }

  atualizarLista() {
    this.corService.buscarTodos().subscribe(
      cores => {
        this.cores = cores;
      },
      error => {
        console.log('Erro ao buscar cor:', error);
      }
    );
  }

}
