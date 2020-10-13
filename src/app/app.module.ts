import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from '../app/menu/menu.component';
import { IndexComponent } from './index/index.component';

import {ListaDocumentoComponent} from './documento/lista-documento.component';
import {EditarDocumentoComponent} from './documento/editar-documento.component';
import {DetalleDocumentoComponent} from './documento/detalle-documento.component';
import {NuevoDocumentoComponent} from './documento/nuevo-documento.component';

import {ListaContribuyenteComponent} from './contribuyente/lista-contribuyente.component';
import {NuevoContribuyenteComponent} from './contribuyente/nuevo-contribuyente.component';
import {EditarContribuyenteComponent} from './contribuyente/editar-contribuyente.component';
import {DetalleContribuyenteComponent} from './contribuyente/detalle-contribuyente.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ListaDocumentoComponent,
    EditarDocumentoComponent,
    DetalleDocumentoComponent,
    NuevoDocumentoComponent,
    ListaContribuyenteComponent,
    NuevoContribuyenteComponent,
    EditarContribuyenteComponent,
    DetalleContribuyenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
