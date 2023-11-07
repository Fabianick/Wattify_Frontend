import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MetodoPago } from '../models/metodo-pago';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {
  private url = `${base_url}/metododepago`;  //misma ruta del backend
  private listaCambio = new Subject<MetodoPago[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<MetodoPago[]>(this.url);
  }
  insert(uni: MetodoPago) {
    return this.http.post(this.url, uni);
  }
  setList(listaNueva: MetodoPago[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<MetodoPago>(`${this.url}/${id}`);
  }
  update(u: MetodoPago) {
    return this.http.put(this.url, u);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
