import { Component, OnInit } from '@angular/core';
import { Contribuyente } from '../models/contribuyente';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { ContribuyenteService } from '../service/contribuyente.service';

@Component({
  selector: 'app-lista-contribuyente',
  templateUrl: './lista-contribuyente.component.html',
  styleUrls: ['./lista-contribuyente.component.css']
})
export class ListaContribuyenteComponent implements OnInit {

  contribuyentes: Contribuyente[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private contribuyenteService: ContribuyenteService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarContribuyentes();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarContribuyentes(): void {
    this.contribuyenteService.lista().subscribe(
      data => {
        this.contribuyentes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.contribuyenteService.delete(id).subscribe(
      data => {
        this.toastr.success('Contribuyente Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarContribuyentes();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
