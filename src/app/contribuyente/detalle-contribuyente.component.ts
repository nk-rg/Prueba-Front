import { Component, OnInit } from '@angular/core';
import { ContribuyenteService } from '../service/contribuyente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contribuyente } from '../models/contribuyente';

@Component({
  selector: 'app-detalle-contribuyente',
  templateUrl: './detalle-contribuyente.component.html',
  styleUrls: ['./detalle-contribuyente.component.css']
})
export class DetalleContribuyenteComponent implements OnInit {

  contribuyente: Contribuyente = null;

  constructor(
    private contribuyenteService: ContribuyenteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.contribuyenteService.detail(id).subscribe(
      data => {
        this.contribuyente = data;
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
    this.router.navigate(['/listacont']);
  }

}
