import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../service/documento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Documento } from '../models/documento';

@Component({
  selector: 'app-detalle-documento',
  templateUrl: './detalle-documento.component.html',
  styleUrls: ['./detalle-documento.component.css']
})
export class DetalleDocumentoComponent implements OnInit {

  documento: Documento = null;

  constructor(
    private documentoService: DocumentoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.documentoService.detail(id).subscribe(
      data => {
        this.documento = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listadoc']);
  }

}
