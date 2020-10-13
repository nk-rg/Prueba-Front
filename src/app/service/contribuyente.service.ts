import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribuyente } from '../models/contribuyente';

@Injectable({
  providedIn: 'root'
})

export class ContribuyenteService {

  contribuyenteURL = 'http://localhost:8080/contribuyentes/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contribuyente[]> {
    return this.httpClient.get<Contribuyente[]>(this.contribuyenteURL + 'list');
  }

  public detail(idTipoContribuyente: number): Observable<Contribuyente> {
    return this.httpClient.get<Contribuyente>(this.contribuyenteURL + `detail/${idTipoContribuyente}`);
  }

  /*public detailName(nombre: string): Observable<Contribuyente> {
    return this.httpClient.get<Contribuyente>(this.productoURL + `detailname/${nombre}`);
  }*/

  public save(contribuyente: Contribuyente): Observable<any> {
    return this.httpClient.post<any>(this.contribuyenteURL + 'create', contribuyente);
  }

  public update(idTipoContribuyente: number, contribuyente: Contribuyente): Observable<any> {
    return this.httpClient.put<any>(this.contribuyenteURL + `update/${idTipoContribuyente}`, contribuyente);
  }

  public delete(idTipoContribuyente: number): Observable<any> {
    return this.httpClient.delete<any>(this.contribuyenteURL + `delete/${idTipoContribuyente}`);
  }
}