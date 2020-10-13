import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../service/documento.service';
import { Documento } from '../models/documento';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-documento',
  templateUrl: './nuevo-documento.component.html',
  styleUrls: ['./nuevo-documento.component.css']
})
export class NuevoDocumentoComponent implements OnInit {

  
  codigo= '';
  nombre = '';
  descripcion='';
  estado:boolean;

  constructor(
    private documentoService: DocumentoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const documento = new Documento(this.codigo,this.nombre,this.descripcion,this.estado);
    this.documentoService.save(documento).subscribe(
      data => {
        this.toastr.success('Documento Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listadoc']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
