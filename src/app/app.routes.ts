import { Routes } from '@angular/router';

// import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';
// import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
// import { estadoResolver } from './components/estado/resolver/estado-resolver';

// import { MunicipioListComponent } from './components/municipio/municipio-list/municipio-list.component';
// import { MunicipioFormComponent } from './components/municipio/municipio-form/municipio-form.component';
// import { municipioResolver } from './components/municipio/resolver/municipio-resolver';

import { CorListComponent } from './components/cor/cor-list/cor-list.component';
import { CorFormComponent } from './components/cor/cor-form/cor-form.component';
import { corResolver } from './components/cor/resolver/cor-resolver';

import { DiscoListComponent } from './components/disco/disco-list/disco-list.component';
import { DiscoFormComponent } from './components/disco/disco-form/disco-form.component';
import { discoResolver } from './components/disco/resolver/disco-resolver';

import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    
    // { path: 'estados', component: EstadoListComponent, title: 'Lista de Estados'},
    // { path: 'estados/new', component: EstadoFormComponent, title: 'Novo Estado'},
    // { path: 'estados/edit/:id', component: EstadoFormComponent, title:'Editar Estado', resolve: {estado: estadoResolver}},

    // { path: 'municipios', component: MunicipioListComponent, title: 'Lista de Municipios'},
    // { path: 'municipios/new', component: MunicipioFormComponent, title: 'Novo Municipio'},
    // { path: 'municipios/edit/:id', component: MunicipioFormComponent, title:'Editar Município', resolve: {municipio: municipioResolver}},
    
    { path: 'cores', component: CorListComponent, title: 'Lista de Cores'},
    { path: 'cores/new', component: CorFormComponent, title: 'Nova Cor'},
    { path: 'cores/edit/:id', component: CorFormComponent, title:'Editar Cor', resolve: {cor: corResolver}},
    
    { path: 'discos', component: DiscoListComponent, title: 'Lista de Discos'},
    { path: 'discos/new', component: DiscoFormComponent, title: 'Novo Disco'},
    { path: 'discos/edit/:id', component: DiscoFormComponent, title:'Editar Disco', resolve: {disco: discoResolver}},

    { path: 'login', component: LoginComponent, title: 'Login'},
];