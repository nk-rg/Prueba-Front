import { Component, OnInit } from '@angular/core';
import { ContribuyenteService } from '../service/contribuyente.service';
import { Contribuyente } from '../models/contribuyente';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-contribuyente',
  templateUrl: './nuevo-contribuyente.component.html',
  styleUrls: ['./nuevo-contribuyente.component.css']
})
export class NuevoContribuyenteComponent implements OnInit {

  
  codigo= '';
  nombre = '';
  descripcion='';
  estado:boolean;

  constructor(
    private contribuyenteService: ContribuyenteService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const contribuyente = new Contribuyente(this.nombre,this.estado);
    this.contribuyenteService.save(contribuyente).subscribe(
      data => {
        this.toastr.success('Contribuyente Creado', 'OK', {
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
