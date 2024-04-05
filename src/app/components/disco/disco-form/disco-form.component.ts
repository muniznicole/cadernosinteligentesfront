import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Cor } from '../../../models/cor.model';
import { CorService } from '../../../services/cor.service';

import { Disco } from '../../../models/disco.model';
import { DiscoService } from '../../../services/disco.service';

@Component({
  selector: 'app-disco-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, 
    RouterModule, MatSelectModule],
  templateUrl: './disco-form.component.html',
  styleUrl: './disco-form.component.css'
})
export class DiscoFormComponent implements OnInit {
  
  formGroup: FormGroup;
  cores: Cor[] = [];

  constructor(private formBuilder: FormBuilder,
    private discoService: DiscoService,
    private corService: CorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formGroup = formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      precoUnitario: ['', Validators.required],
      estoque: ['', Validators.required],
      cor: [null]
    });
  }

  ngOnInit(): void {
    this.corService.buscarTodos().subscribe(data => {
      this.cores = data;
      this.initializeForm();
    });
  }

  initializeForm() {

    const disco: Disco = this.activatedRoute.snapshot.data['disco'];

    // selecionando a cor
    const cor = this.cores
      .find(cor => cor.id === (disco?.cor?.id || null)); 

    this.formGroup = this.formBuilder.group({
      id: [(disco && disco.id) ? disco.id : null],
      nome: [(disco && disco.nome) ? disco.nome : '', Validators.required],
      descricao: [(disco && disco.descricao) ? disco.descricao : '', Validators.required],
      precoUnitario: [(disco && disco.precoUnitario) ? disco.precoUnitario : '', Validators.required],
      estoque: [(disco && disco.estoque) ? disco.estoque : '', Validators.required],
      cor: [cor]
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const disco = this.formGroup.value;
      if (disco.id == null) {
        this.discoService.inserir(disco).subscribe({
          next: (discoCadastrado) => {
            this.router.navigateByUrl('/discos');
          },
          error: (err) => {
            console.log('Erro ao Incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.discoService.alterar(disco).subscribe({
          next: (discoAlterado) => {
            this.router.navigateByUrl('/discos');
          },
          error: (err) => {
            console.log('Erro ao Editar' + JSON.stringify(err));
          }
        });
      }
    }
  }

}
