import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private url = 'https://maikiki.herokuapp.com/contratocategoria/categorias';

  constructor(private http: HttpClient) { }

  getTipoBusquedas(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
