import { Component, OnInit } from '@angular/core';
import { Contribuyente } from '../models/contribuyente';
import { ContribuyenteService } from '../service/contribuyente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-contribuyente',
  templateUrl: './editar-contribuyente.component.html',
  styleUrls: ['./editar-contribuyente.component.css']
})
export class EditarContribuyenteComponent implements OnInit {

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
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.contribuyenteService.update(id, this.contribuyente).subscribe(
      data => {
        this.toastr.success('Contribuyente Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listacont']);
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
