import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';

import { ListaDocumentoComponent } from './documento/lista-documento.component';
import { NuevoDocumentoComponent } from './documento/nuevo-documento.component';
import { DetalleDocumentoComponent } from './documento/detalle-documento.component';
import {EditarDocumentoComponent } from './documento/editar-documento.component'

import {ListaContribuyenteComponent} from './contribuyente/lista-contribuyente.component';
import {NuevoContribuyenteComponent} from './contribuyente/nuevo-contribuyente.component';
import {DetalleContribuyenteComponent} from './contribuyente/detalle-contribuyente.component';
import {EditarContribuyenteComponent} from './contribuyente/editar-contribuyente.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'listadoc', component: ListaDocumentoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalledoc/:id', component: DetalleDocumentoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevodoc', component: NuevoDocumentoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editardoc/:id', component: EditarDocumentoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  
  { path: 'listacont', component: ListaContribuyenteComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detallecont/:id', component: DetalleContribuyenteComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevocont', component: NuevoContribuyenteComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarcont/:id', component: EditarContribuyenteComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
