import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})

export class DocumentoService {

  documentoURL = 'http://localhost:8080/documentos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Documento[]> {
    return this.httpClient.get<Documento[]>(this.documentoURL + 'list');
  }

  public detail(idTipoDocumento: number): Observable<Documento> {
    return this.httpClient.get<Documento>(this.documentoURL + `detail/${idTipoDocumento}`);
  }

  /*public detailName(nombre: string): Observable<Documento> {
    return this.httpClient.get<Documento>(this.productoURL + `detailname/${nombre}`);
  }*/

  public save(documento: Documento): Observable<any> {
    return this.httpClient.post<any>(this.documentoURL + 'create', documento);
  }

  public update(idTipoDocumento: number, documento: Documento): Observable<any> {
    return this.httpClient.put<any>(this.documentoURL + `update/${idTipoDocumento}`, documento);
  }

  public delete(idTipoDocumento: number): Observable<any> {
    return this.httpClient.delete<any>(this.documentoURL + `delete/${idTipoDocumento}`);
  }
}
