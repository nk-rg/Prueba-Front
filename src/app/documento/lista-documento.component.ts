import { Component, OnInit } from '@angular/core';
import { Documento } from '../models/documento';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { DocumentoService } from '../service/documento.service';

@Component({
  selector: 'app-lista-documento',
  templateUrl: './lista-documento.component.html',
  styleUrls: ['./lista-documento.component.css']
})
export class ListaDocumentoComponent implements OnInit {

  documentos: Documento[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private documentoService: DocumentoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarDocumentos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarDocumentos(): void {
    this.documentoService.lista().subscribe(
      data => {
        this.documentos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.documentoService.delete(id).subscribe(
      data => {
        this.toastr.success('Documento Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarDocumentos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
